<template>
  <div class="app-content flex h-full overflow-hidden pt-4 pr-6 pb-6">
    <TheAppContentSidebar />
    <div
      class="projects-section flex-2 bg-projects-section rounded-32px pt-8 px-8 overflow-hidden h-full flex flex-col"
      @scroll="fixin"
    >
      <div
        class="projects-section-header flex justify-between items-center mb-6 text-main-color"
      >
        <p class="text-2xl font-bold opacity-90 text-main-color">Projects</p>
        <p class="time text-2xl font-bold opacity-90 text-main-color">
          December, 12
        </p>
      </div>
      <div class="projects-section-line flex justify-between items-center pb-8">
        <div class="projects-status flex">
          <div class="item-status">
            <span class="status-number">45</span>
            <span class="status-type">In Progress</span>
          </div>
          <div class="item-status">
            <span class="status-number">24</span>
            <span class="status-type">Upcoming</span>
          </div>
          <div class="item-status">
            <span class="status-number">62</span>
            <span class="status-type">Total Projects</span>
          </div>
        </div>
        <div class="view-actions flex items-center">
          <button
            class="view-btn list-view"
            title="List View"
            @click="listView"
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
              class="feather feather-list"
            >
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
          </button>
          <button
            class="view-btn grid-view active"
            title="Grid View"
            @click="gridView"
          >
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
              class="feather feather-grid"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </button>
        </div>
      </div>
      <div class="project-boxes jsGridView my-0 -mx-2 overflow-y-auto">
        <div class="project-box-wrapper">
          <div class="project-box" style="background-color: #fee4cb">
            <div class="project-box-header">
              <span>December 10, 2020</span>
              <div class="more-wrapper">
                <button class="project-btn-more">
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
                    class="feather feather-more-vertical"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="project-box-content-header">
              <p class="box-content-header">Web Designing</p>
              <p class="box-content-subheader">Prototyping</p>
            </div>
            <div class="box-progress-wrapper">
              <p class="box-progress-header">Progress</p>
              <div class="box-progress-bar">
                <span
                  class="box-progress"
                  style="width: 60%; background-color: #ff942e"
                ></span>
              </div>
              <p class="box-progress-percentage">60%</p>
            </div>
            <div class="project-box-footer">
              <div class="participants">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                  alt="participant"
                />
                <img
                  src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                  alt="participant"
                />
                <button class="add-participant" style="color: #ff942e">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-plus"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
              </div>
              <div class="days-left" style="color: #ff942e">2 Days Left</div>
            </div>
          </div>
        </div>
        <div class="project-box-wrapper">
          <div class="project-box" style="background-color: #e9e7fd">
            <div class="project-box-header">
              <span>December 10, 2020</span>
              <div class="more-wrapper">
                <button class="project-btn-more">
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
                    class="feather feather-more-vertical"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="project-box-content-header">
              <p class="box-content-header">Testing</p>
              <p class="box-content-subheader">Prototyping</p>
            </div>
            <div class="box-progress-wrapper">
              <p class="box-progress-header">Progress</p>
              <div class="box-progress-bar">
                <span
                  class="box-progress"
                  style="width: 50%; background-color: #4f3ff0"
                ></span>
              </div>
              <p class="box-progress-percentage">50%</p>
            </div>
            <div class="project-box-footer">
              <div class="participants">
                <img
                  src="https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80"
                  alt="participant"
                />
                <img
                  src="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80"
                  alt="participant"
                />
                <button class="add-participant" style="color: #4f3ff0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-plus"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
              </div>
              <div class="days-left" style="color: #4f3ff0">2 Days Left</div>
            </div>
          </div>
        </div>
        <div class="project-box-wrapper">
          <div class="project-box">
            <div class="project-box-header">
              <span>December 10, 2020</span>
              <div class="more-wrapper">
                <button class="project-btn-more">
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
                    class="feather feather-more-vertical"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="project-box-content-header">
              <p class="box-content-header">Svg Animations</p>
              <p class="box-content-subheader">Prototyping</p>
            </div>
            <div class="box-progress-wrapper">
              <p class="box-progress-header">Progress</p>
              <div class="box-progress-bar">
                <span
                  class="box-progress"
                  style="width: 80%; background-color: #096c86"
                ></span>
              </div>
              <p class="box-progress-percentage">80%</p>
            </div>
            <div class="project-box-footer">
              <div class="participants">
                <img
                  src="https://images.unsplash.com/photo-1587628604439-3b9a0aa7a163?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                  alt="participant"
                />
                <img
                  src="https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80"
                  alt="participant"
                />
                <button class="add-participant" style="color: #096c86">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-plus"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
              </div>
              <div class="days-left" style="color: #096c86">2 Days Left</div>
            </div>
          </div>
        </div>
        <div class="project-box-wrapper">
          <div class="project-box" style="background-color: #ffd3e2">
            <div class="project-box-header">
              <span>December 10, 2020</span>
              <div class="more-wrapper">
                <button class="project-btn-more">
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
                    class="feather feather-more-vertical"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="project-box-content-header">
              <p class="box-content-header">UI Development</p>
              <p class="box-content-subheader">Prototyping</p>
            </div>
            <div class="box-progress-wrapper">
              <p class="box-progress-header">Progress</p>
              <div class="box-progress-bar">
                <span
                  class="box-progress"
                  style="width: 20%; background-color: #df3670"
                ></span>
              </div>
              <p class="box-progress-percentage">20%</p>
            </div>
            <div class="project-box-footer">
              <div class="participants">
                <img
                  src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                  alt="participant"
                />
                <img
                  src="https://images.unsplash.com/photo-1587628604439-3b9a0aa7a163?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                  alt="participant"
                />
                <button class="add-participant" style="color: #df3670">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-plus"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
              </div>
              <div class="days-left" style="color: #df3670">2 Days Left</div>
            </div>
          </div>
        </div>
        <div class="project-box-wrapper">
          <div class="project-box" style="background-color: #c8f7dc">
            <div class="project-box-header">
              <span>December 10, 2020</span>
              <div class="more-wrapper">
                <button class="project-btn-more">
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
                    class="feather feather-more-vertical"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="project-box-content-header">
              <p class="box-content-header">Data Analysis</p>
              <p class="box-content-subheader">Prototyping</p>
            </div>
            <div class="box-progress-wrapper">
              <p class="box-progress-header">Progress</p>
              <div class="box-progress-bar">
                <span
                  class="box-progress"
                  style="width: 60%; background-color: #34c471"
                ></span>
              </div>
              <p class="box-progress-percentage">60%</p>
            </div>
            <div class="project-box-footer">
              <div class="participants">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                  alt="participant"
                />
                <img
                  src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                  alt="participant"
                />
                <button class="add-participant" style="color: #34c471">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-plus"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
              </div>
              <div class="days-left" style="color: #34c471">2 Days Left</div>
            </div>
          </div>
        </div>
        <div class="project-box-wrapper">
          <div class="project-box" style="background-color: #d5deff">
            <div class="project-box-header">
              <span>December 10, 2020</span>
              <div class="more-wrapper">
                <button class="project-btn-more">
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
                    class="feather feather-more-vertical"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="project-box-content-header">
              <p class="box-content-header">Web Designing</p>
              <p class="box-content-subheader">Prototyping</p>
            </div>
            <div class="box-progress-wrapper">
              <p class="box-progress-header">Progress</p>
              <div class="box-progress-bar">
                <span
                  class="box-progress"
                  style="width: 40%; background-color: #4067f9"
                ></span>
              </div>
              <p class="box-progress-percentage">40%</p>
            </div>
            <div class="project-box-footer">
              <div class="participants">
                <img
                  src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                  alt="participant"
                />
                <img
                  src="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80"
                  alt="participant"
                />
                <button class="add-participant" style="color: #4067f9">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-plus"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
              </div>
              <div class="days-left" style="color: #4067f9">2 Days Left</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TheAppContentMessages />
  </div>
</template>

<script setup>
import TheAppContentMessages from "./TheAppContentMessages.vue";
import TheAppContentSidebar from "./TheAppContentSidebar.vue";
const listView = (e) => {
  var listView = document.querySelector(".list-view");
  var gridView = document.querySelector(".grid-view");
  var projectsList = document.querySelector(".project-boxes");
  gridView.classList.remove("active");
  listView.classList.add("active");
  projectsList.classList.remove("jsGridView");
  projectsList.classList.add("jsListView");
};

const fixin = (e) => {
  const tabbar = document.querySelector(".tabbar")
  tabbar.classList.remove("fixout")
  tabbar.classList.add("fixin");
  let t1 = 0;
  let t2 = 0;
  let timer = null; // 定时器
  clearTimeout(timer);
  timer = setTimeout(isScrollEnd, 150);
  t1 = e.target.scrollTop;

  function isScrollEnd() {
    t2 = e.target.scrollTop;
    if (t2 == t1) {
      tabbar.classList.replace('fixin', 'fixout')
    }
  }
};

const gridView = (e) => {
  var listView = document.querySelector(".list-view");
  var gridView = document.querySelector(".grid-view");
  var projectsList = document.querySelector(".project-boxes");
  gridView.classList.add("active");
  listView.classList.remove("active");
  projectsList.classList.remove("jsListView");
  projectsList.classList.add("jsGridView");
};
</script>

<style lang="postcss" scoped></style>
