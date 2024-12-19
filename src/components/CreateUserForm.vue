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

<script>
import { ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const toastOptions = {
  "position": "bottom-right",
  "transition": "flip",
};
export default {
  name: "CreateUserForm",

  setup() {
    const form = ref({
      username: "",
      password: "",
      role: ""
    });

    const handleSubmit = async () => {
      try {
        const response = await fetch("/api/admin/create-user", {
          method: "POST",
          body: new URLSearchParams({
            username: form.value.username,
            password: form.value.password,
            role: form.value.role
          })
        });

        if (response.ok) {
          toast.success("The user has been created successfully!", toastOptions);
        } else {
          const errorResponse = await response.json();
          toast.error(errorResponse.error || "Something went wrong.", toastOptions);
        }
      } catch (error) {
        toast.error(errorResponse.error || "Something went wrong.", toastOptions);
      }
    };

    return { form, handleSubmit };
  }
};
</script>

<style scoped>
</style>