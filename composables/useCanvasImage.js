import { ref } from 'vue';

const imageLoaded = ref(null);
const canvas = ref(null);
const ctx = ref(null);
const image = ref(null);

export function useCanvasImage() {

    const debugFunction = () => {
        const imageStorage = localStorage.getItem('image')
        console.log(imageStorage)
    }

    const print100FirstPixels = () => {
        if (!ctx.value) {
          console.error("Le contexte du canvas n'est pas initialisé.");
          return;
        }
      
        if (!image.value) {
          console.error("Aucune image n'est chargée.");
          return;
        }
      
        try {
          const pixelData = ctx.value.getImageData(0, 0, 10, 10).data;
          console.log("Premiers pixels : ", pixelData);
        } catch (error) {
          console.error("Erreur lors de la lecture des pixels : ", error);
        }
      };
      
    const convertToGrayscale = () => {
      if (!ctx.value || !canvas.value) {
        console.error('Canvas or context is not defined');
        return;
      }

      const imageData = ctx.value.getImageData(0, 0, canvas.value.width, canvas.value.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = avg;     // Red
        data[i + 1] = avg; // Green
        data[i + 2] = avg; // Blue
      }

      ctx.value.putImageData(imageData, 0, 0);
    };
    

    const drawImage = () => {
        const canvasEl = canvas.value;
        const maxWidth = window.innerWidth * 0.8; // 80% de la largeur de l'écran
        const maxHeight = window.innerHeight * 0.8; // 80% de la hauteur de l'écran
        
        const ratio = Math.min(maxWidth / image.value.width, maxHeight / image.value.height, 1);
        
        canvasEl.width = image.value.width * ratio;
        canvasEl.height = image.value.height * ratio;
      
        ctx.value = canvasEl.getContext('2d');
        ctx.value.clearRect(0, 0, canvasEl.width, canvasEl.height);
        ctx.value.drawImage(image.value, 0, 0, canvasEl.width, canvasEl.height);
      };
      
  const downloadImage = (name) => {
    const link = document.createElement('a')
    link.download = name
    link.href = canvas.value.toDataURL('image/png')
    link.click()
  }

  const loadImage = (event) => {
    if (!process.client) return; // Vérifie qu'on est côté client
    const file = event.target.files[0];
    if (!file) return;

    imageLoaded.value = file;
    console.log(imageLoaded)
    const reader = new FileReader();
    reader.onload = () => {
      image.value = new Image();
      image.value.src = reader.result;
      image.value.onload = drawImage;
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    if (process.client) {
      localStorage.removeItem('image');
    }
    imageLoaded.value = null;
  };

  const initializeAppImage = () => {
    if (localStorage.getItem('image')) {
      return
    }
  }

  return {
    canvas,
    loadImage,
    removeImage,
    drawImage,
    debugFunction,
    print100FirstPixels,
    downloadImage,
    convertToGrayscale,
    imageLoaded,
  };
}
