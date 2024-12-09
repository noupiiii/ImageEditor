<template>
    <div class="border-b dark:border-gray-500 mb-6">
        <UContainer>
            <div class="py-4 relative flex items-center">
                <!-- Titre à gauche -->
                <div class="absolute left-0 flex items-center gap-2">
                <h1 class="font-semibold text-xl text-primary-500">ImageEditor</h1>
                <UBadge label="by n0upi" variant="solid" color="white" />
            </div>
            
            <!-- Boutons au centre -->
            <div class="flex gap-3 mx-auto">
                <ULink
                to="/"
                active-class="text-primary"
                inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                Accueil
            </ULink>
            <ULink
            to="/code"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
            Code
        </ULink>
        <UButton label="debug" @click="debugFunction" />
    </div>
    
    <!-- ThemeSelector à droite -->
    <div class="absolute right-0">
        <ThemeSelector />
    </div>
</div>
</UContainer>
</div>
</template>

<script setup>
const {debugFunction, print100FirstPixels} = useCanvasImage()
</script>