<template>
    <div class="flex justify-between">
        <UInput v-model="imageName" />
        <div class="flex gap-2">
            <UButton square icon="i-heroicons-trash" variant="outline" @click="removeImage" />
            <UButton square icon="i-heroicons-document-arrow-down" variant="outline" @click="handleDownloadImage" />
        </div>
    </div>
</template>

<script setup>
const { removeImage, imageLoaded, downloadImage } = useCanvasImage()
const imageName = imageLoaded.value.name

const handleDownloadImage = () => {
    downloadImage(imageName)
}

onMounted(() => {
    console.log(imageLoaded.value.name)
})
</script>