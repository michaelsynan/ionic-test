<template>
  <ion-page>
    <ion-header :translucent="true" class="ion-no-border transparent">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Nuxt Ionic</ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="container" class="my-0 md:my-10 max-w-full mx-auto">
        <!-- <div class="flex justify-center items-center">
          <nuxt-img provider="cloudinary" src="/v1708006480/physicalmind-logo-french-blue_hoitel.png" height="60" />
        </div> -->
        <div>
          <TheSwiper />
        </div>
        <div class="flex flex-col md:flex-row gap-4 md:gap-20 justify-center items-center my-2 w-full max-w-8xl">
          <div class="flex flex-row gap-4 items-center">
            <UBadge @click="updateSelectedBadge('New')" :class="badgeClass('New')"
              class="cursor-pointer py-1.5 px-3 rounded-full border !border-opacity-80 border-primary">New</UBadge>
            <UBadge @click="updateSelectedBadge('all videos')" :class="badgeClass('all videos')"
              class="cursor-pointer  py-1.5 px-3 rounded-full">All Videos</UBadge>
            <UBadge @click="updateSelectedBadge('dance')" :class="badgeClass('dance')"
              class="cursor-pointer  py-1.5 px-3 rounded-full">Dance</UBadge>
            <UBadge @click="updateSelectedBadge('golf')" :class="badgeClass('golf')"
              class="cursor-pointer  py-1.5 px-3 rounded-full">Golf</UBadge>
          </div>
          <ion-list class="flex items-center bg-transparent" size="small">
            <ion-item class="border-b-0">
              <ion-select label="Instructor" placeholder="All" v-model="selectedInstructor" shape="round">
                <!-- Static "All" option -->
                <ion-select-option value="All">All</ion-select-option>

                <!-- Dynamic options from your data -->
                <ion-select-option v-for="instructor in instructorData" :key="instructor.value" :value="instructor.value">
                  {{ instructor.name }}
                </ion-select-option>
              </ion-select>

            </ion-item>
          </ion-list>
        </div>

        <VideoList :tag="selectedBadge" :instructor="selectedInstructor" class="max-w-5xl mx-auto mb-20" />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { instructorData } from '/data/instructorData.js'; // Ensure this path is correct

// Define page metadata
definePageMeta({
  middleware: ["logger"]
});

const route = useRoute(); // Get access to the current route object

const selectedBadge = ref('all videos'); // Default selection
const selectedInstructor = ref('All'); // Default instructor selection

// Function to handle logging and updating based on the instructor query parameter
const handleInstructorQueryParam = () => {
  const instructorQueryParam = route.query.instructor;
  if (instructorQueryParam) {
    console.log('URL instructor parameter value:', instructorQueryParam);
    selectedInstructor.value = instructorQueryParam;
  } else {
    console.log('No instructor query parameter found.');
  }
};

// Execute the logic once the component is fully mounted to ensure the route is resolved
onMounted(() => {
  handleInstructorQueryParam();
});

// Additionally, react to changes in the route.query.instructor to handle client-side navigation
watch(() => route.query.instructor, (newValue) => {
  console.log('URL instructor parameter value changed to:', newValue);
  selectedInstructor.value = newValue || 'All'; // Fallback to 'All' if newValue is undefined
});

const updateSelectedBadge = (badgeLabel: string) => {
  selectedBadge.value = badgeLabel;
};

const badgeClass = (badgeLabel: string) => {
  return selectedBadge.value === badgeLabel ? 'badge-selected' : 'badge-default';
};
</script>


<style>
/* Styles for badges */
.badge-default {
  /* Dim color for non-selected badges */
  opacity: 0.5;
}

.badge-selected {
  /* Bright color for the selected badge */
  opacity: 1;
  color: white !important;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}


#container {
  text-align: center;

}

#container {
  position: relative;
  /* Ensure pseudo-element is positioned relative to this container */
  text-align: center;
}

ion-select {
  --background: transparentf;
  --border-color: #cccccc;
  --border-radius: 4px;
  --placeholder-color: #888888;
}

ion-item {
  --background: transparent;
  --ion-item-background: transparent;
  --border-color: transparent;
}

ion-item:hover,
ion-item:active,
ion-item.item-interactive:item-interactive-hover {
  --background: transparent;
  --ion-item-background-hover: transparent;
  /* For hover state */
}


</style>

