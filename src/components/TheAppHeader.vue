<template>
  <div class="app-header flex justify-between items-center w-full px-6 py-4">
    <!-- flex布局 设置空间为between均匀分配 元素行内垂直居中 宽度100% 上下边距为16px 左右边距为24px -->
    <div class="app-header-left flex items-center flex-grow">
      <!-- 同时设定left与right为flex布局并垂直剧中 left为grow-1自动填充空间-->
      <span class="app-icon bg-main-color relative"></span>
      <p class="app-name text-main-color m-0 text-name mx-8 font-bold">Ligmo</p>
      <!-- 样式设定 -->
      <div
        class="search-wrapper rounded-full h-10 bg-search-area-bg pr-12px flex justify-between items-center w-full max-w-md box-shadow-search text-light-font dark:shadow-none overflow-hidden"
      >
        <input
          type="text"
          class="search-input border-0 flex-1 outline-none h-full px-5 text-base bg-search-area-bg text-main-color placeholder:text-main-color placeholder:opacity-60"
          placeholder="Search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="feather feather-search"
          viewBox="0 0 24 24"
        >
          <defs></defs>
          <circle cx="11" cy="11" r="8"></circle>
          <path d="M21 21l-4.35-4.35"></path>
        </svg>
        <!-- <div class="search-panel bg-fuchsia-300 ">
          search-panel 搜索内容联想面板
        </div> -->
      </div>
    </div>

    <!-- app-header-left -->

    <div class="app-header-right flex items-center">
      <!-- 同时设定left与right为flex布局并垂直剧中 -->
      <!-- 设定button元素的左外边距为0.75rem,即12px,作为间隔 -->
      <button
        class="mode-switch ml-10px bg-transparent border-none p-0 text-main-color flex justify-center items-center"
        title="Switch Theme"
        @click="modeSwitch"
      >
        <svg
          class="moon"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <defs></defs>
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
        </svg>
      </button>
      <button
        class="add-btn ml-10px text-white bg-button-bg p-0 border-0 rounded-full w-8 h-8 flex items-center justify-center"
        title="Add New Project"
        @click="addCard"
      >
        <svg
          class="btn-icon"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>
      <button
        class="notification-btn ml-10px text-main-color p-0 border-0 bg-transparent h-8 flex justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-bell"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      </button>
      <button
        class="profile-btn ml-10px p-0 border-0 bg-transparent flex justify-center items-center pl-3 border-l-2 border-gray-200"
      >
        <img
          class="h-8 w-8 object-cover rounded-full mr-1"
          src="@/assets/assert.jpg"
        />
        <span class="text-main-color text-base font-bold">Tom</span>
      </button>
      <button class="messages-btn ml-10px" @click="showMessages">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-message-circle"
        >
          <path
            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import Lunr from "lunr";

let documents = [
  {
    name: "Lunr",
    text: "Like Solr, but much smaller, and not as bright.",
  },
  {
    name: "React",
    text: "A JavaScript library for building user interfaces.",
  },
  {
    name: "Lodash",
    text: "A modern JavaScript utility library delivering modularity, performance & extras.",
  },
];

let idx = Lunr(function() {
  this.ref("name");
  this.field("text");
  documents.forEach(function (doc) {
    this.add(doc);
  }, this);
});


console.log(idx.search('bright'))




// 事件组

const modeSwitch = (e) => {
  document.documentElement.classList.toggle("dark");
  e.target.classList.toggle("active");
};

const showMessages = (e) => {
  document.querySelector(".messages-section").classList.add("show");
};

const addCard = (e) => {
  e.preventDefault();
  const modalBox = document.querySelector(".modal-box");
  modalBox.classList.toggle("open");
};
</script>

<style lang="postcss" scoped></style>
