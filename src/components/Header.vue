<template>
     <header id="header" class="relative top-5 z-40 lg:mt-3 max-w-content mx-auto w-full px-4 sm:px-7 pb-5 lg:border-transparent border-b border-[#343d4995] flex justify-center gap-14">
        <!-- navbar -->
        <div class="flex-grow">
            <div>
                <!-- menu -->
                <div class="relative">
                    <div
                        class="flex items-center z-10 justify-between w-full relative">
                         <div class="flex items-center gap-6"> 
                             <!-- logo -->
                              <router-link to="/">
                                <img class="w-14 h-14 rounded-full" alt="logo" src="../assets/img/logo.PNG">
                              </router-link>
                              <ul class="hidden md:flex items-center gap-5 lg:gap-9 text-sm lg:text-base"> 
                                <li> 
                                    <router-link to="/" class="flex items-center gap-3 text-white hover:text-[#fba311]">
                                       <div class="w-1.5 h-1.5 rounded-full bg-[#fba311]"></div>
                                       <p>خانه</p>
                                    </router-link>
                                </li>
                                <li> 
                                    <router-link to="/" class="flex items-center gap-3 text-white hover:text-[#fba311]">
                                       <div class="w-1.5 h-1.5 rounded-full bg-[#fba311]"></div>
                                       <p>تماس با ما</p>
                                    </router-link>
                                </li>
                                <li> 
                                    <router-link to="/" class="flex items-center gap-3 text-white hover:text-[#fba311]">
                                       <div class="w-1.5 h-1.5 rounded-full bg-[#fba311]"></div>
                                       <p>دریافت نمایندگی</p>
                                    </router-link>
                                </li>
                              </ul>
                         </div>
                        <!-- login && cart && dark mode -->
                         <div class="flex items-center gap-3 lg:gap-5">
                             <IconifyIcon class="text-3xl flex-shrink-0 cursor-pointer transition-all text-white" icon="mdi:search" />
                               <router-link to="/"
                                 class="group transition-all hover:text-[#fba311] rounded-[30px] gap-3 text-sm text-[#001837] hidden md:flex items-center justify-center">
                                 <div class="w-10 h-10 rounded-full bg-[#fba311] group-hover:bg-[#001837] flex items-center justify-center"> 
                                     <IconifyIcon class="text-2xl flex-shrink-0 transition-all text-white" icon="mdi:phone" />
                                 </div>
                                 <p class="rounded-[30px] bg-primary h-full hidden lg:flex items-center justify-center">02188888888</p>
                            </router-link>
                             <router-link to="/"
                                 class="group transition-all rounded-[30px] gap-2 bg-[#001837] hover:bg-[#fba311] text-sm text-white w-[176px] h-[52px] hidden md:flex items-center justify-center">
                                 <p class="rounded-[30px] bg-primary h-full flex items-center justify-center">آزمون استعدادیابی</p>
                                 <IconifyIcon class="text-2xl flex-shrink-0 transition-all text-white" icon="mdi:arrow-left" />
                            </router-link>
                            <!-- hamicon -->
                             <div id="hamIcon" @click="openMenu" class="text-2xl text-white rounded-lg text-primary cursor-pointer w-10 h-10 lg:hidden flex items-center justify-center"> 
                                <IconifyIcon class="text-4xl" icon="mdi:menu" />
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- mobile menu -->
        <div :class="{'active': mobileMenu}"
            class="mobileMenu bg-white dark:bg-dark lg:hidden p-4 z-50 border-l-2 border-gray3">
            <div class="flex items-center justify-between mb-7">
                <!-- logo -->
                <a><img alt="logo" src="../assets/img/logo.PNG" class="w-[70px] h-[70px] block"></a>
                <!-- close menu -->
                 <div @click="openMenu" class="relative -left-[35px] -top-3 cursor-pointer bg-[#ff0000] w-9 h-9 rounded-full flex items-center justify-center"> 
                    <IconifyIcon class="text-2xl text-white" icon="mdi:close" />
                 </div>
            </div>
            <!-- menu -->
            <ul class="mb-5">
                <li class="mb-2.5 py-[6px]">
                    <router-link class="flex items-center gap-2 text-xs text-light" to="/">
                        <div class="bg-[#2abb66] flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-xl text-white"> 
                           <IconifyIcon class="text-xl text-white" icon="mdi:home" />
                        </div>
                        <p>خانه</p>
                        <IconifyIcon class="text-lg text-light mr-auto flex-shrink-0" icon="mdi:arrow-left" />
                    </router-link>
                </li>
                <li class="mb-2.5 py-[6px]">
                    <router-link class="flex items-center gap-2 text-xs text-light" to="/">
                        <div class="bg-[#fcbe11] flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-xl text-white"> 
                           <IconifyIcon class="text-xl text-white" icon="mdi:contact" />
                        </div>
                        <p>تماس با ما</p>
                        <IconifyIcon class="text-lg text-light mr-auto flex-shrink-0" icon="mdi:arrow-left" />
                    </router-link>
                </li>
                    <li class="mb-2.5 py-[6px]">
                    <router-link class="flex items-center gap-2 text-xs text-light" to="/">
                        <div class="bg-[#ec5b42] flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-xl text-white"> 
                           <IconifyIcon class="text-xl text-white" icon="mdi:medal" />
                        </div>
                        <p>دریافت نمایندگی</p>
                        <IconifyIcon class="text-lg text-light mr-auto flex-shrink-0" icon="mdi:arrow-left" />
                    </router-link>
                </li>
            </ul>
                    <router-link to="/"
                                 class="group transition-all rounded-[30px] gap-2 bg-[#001837] hover:bg-[#fba311] text-sm text-white w-full h-[52px] md:hidden flex items-center justify-center">
                                 <p class="rounded-[30px] bg-primary h-full flex items-center justify-center">آزمون استعدادیابی</p>
                                 <IconifyIcon class="text-2xl flex-shrink-0 transition-all text-white" icon="mdi:arrow-left" />
                            </router-link>
        </div>
        <!-- overlay -->
         <div @click="openMenu" :class="{'active': mobileMenu}" id="overlay" class="cursor-pointer fixed inset-0 w-full h-full"></div>
    </header>
</template>

<script setup>
 import { ref } from 'vue'
 const mobileMenu = ref(false);
 
 function openMenu() {
  mobileMenu.value = !mobileMenu.value;
}
</script>