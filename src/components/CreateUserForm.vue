<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <div>
      <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
      <input
          v-model="form.username"
          type="text"
          id="username"
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
      />
    </div>

    <div>
      <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
      <input
          v-model="form.password"
          type="password"
          id="password"
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
      />
    </div>

    <div>
      <label for="role" class="block text-sm font-medium text-gray-700">Role</label>
      <input
          v-model="form.role"
          type="text"
          id="role"
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
      />
    </div>

    <button
        type="submit"
        class="w-full py-2 px-4 text-white bg-blue-600 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
    >
      Continue
    </button>
  </form>
</template>

<script lang="ts">

import {ref} from "vue";
import {toast, type ToastOptions} from "vue3-toastify";
import axios from "axios";
import axiosRetry from "axios-retry";
import "vue3-toastify/dist/index.css";


axiosRetry(axios, {
  retries: 10,
  retryDelay: (retryCount: number) => {
    console.log(`Retry attempt: ${retryCount}`);
    return retryCount * 5000;
  },
  shouldResetTimeout: true,
  retryCondition: (error) => {
    return error.response?.status >= 500 || error.code === "ECONNABORTED";
  },
});

const toastOptions: ToastOptions = {
  "position": "bottom-right",
  "transition": "flip",
};

export default {
  name: "CreateUserForm",

  setup() {
    const form = ref<{ username: string; password: string; role: string }>({
      username: "",
      password: "",
      role: ""
    });

    const handleSubmit = async (): Promise<void> => {
      try {
        const response = await axios.post("/api/admin/create-user", {
          username: form.value.username,
          password: form.value.password,
          role: form.value.role,
        });

        if (response.status === 201) {
          toast("The user has been successfully created!", {
            ...toastOptions,
            type: "success",
          });
        } else {
          toast(
              response.data.error || "Something went wrong.",
              { ...toastOptions, type: "error" }
          );
        }
      } catch (error: any) {
        toast(
            error.response?.data?.error || error.message || "Maximum number of retries reached.",
            { ...toastOptions, type: "error" }
        );
      }
    };

    return {form, handleSubmit};
  }
};
</script>

<style scoped>
</style>