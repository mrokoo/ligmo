<template>
    <div class="messages-section">
      <button class="messages-close" @click="closeMessages">
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
          class="feather feather-x-circle"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
      </button>
      <div class="projects-section-header flex justify-between items-center mb-6 text-main-color"
      >
        <p class="text-2xl font-bold opacity-90 text-main-color">
          Client Messages
        </p>
      </div>
      <div class="messages">
        <div class="message-box">
          <img
            src="@/assets/assert2.jpg"
            alt="profile image"
          />
          <div class="message-content">
            <div class="message-header">
              <div class="name">Stephanie</div>
              <div class="star-checkbox">
                <input type="checkbox" id="star-1" />
                <label for="star-1">
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
                    class="feather feather-star"
                  >
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    />
                  </svg>
                </label>
              </div>
            </div>
            <p class="message-line">
              I got your first assignment. It was quite good. 🥳 We can continue
              with the next assignment.
            </p>
            <p class="message-line time">Dec, 12</p>
          </div>
        </div>
        <div class="message-box">
          <img
            src="@/assets/assert.jpg"
            alt="profile image"
          />
          <div class="message-content">
            <div class="message-header">
              <div class="name">Mark</div>
              <div class="star-checkbox">
                <input type="checkbox" id="star-2" />
                <label for="star-2">
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
                    class="feather feather-star"
                  >
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    />
                  </svg>
                </label>
              </div>
            </div>
            <p class="message-line">
              Hey, can tell me about progress of project? I'm waiting for your
              response.
            </p>
            <p class="message-line time">Dec, 12</p>
          </div>
        </div>
        <div class="message-box">
          <img
            src="@/assets/assert.jpg"
            alt="profile image"
          />
          <div class="message-content">
            <div class="message-header">
              <div class="name">David</div>
              <div class="star-checkbox">
                <input type="checkbox" id="star-3" />
                <label for="star-3">
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
                    class="feather feather-star"
                  >
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    />
                  </svg>
                </label>
              </div>
            </div>
            <p class="message-line">
              Awesome! 🤩 I like it. We can schedule a meeting for the next one.
            </p>
            <p class="message-line time">Dec, 12</p>
          </div>
        </div>
        <div class="message-box">
          <img
            src="@/assets/assert.jpg"
            alt="profile image"
          />
          <div class="message-content">
            <div class="message-header">
              <div class="name">Jessica</div>
              <div class="star-checkbox">
                <input type="checkbox" id="star-4" />
                <label for="star-4">
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
                    class="feather feather-star"
                  >
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    />
                  </svg>
                </label>
              </div>
            </div>
            <p class="message-line">
              I am really impressed! Can't wait to see the final result.
            </p>
            <p class="message-line time">Dec, 11</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
  const closeMessages = () => {
    document.querySelector('.messages-section').classList.remove('show');
  }
</script>

<style lang="postcss" scoped>

</style>