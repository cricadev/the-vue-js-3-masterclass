<script setup lang="ts">
import { usePostsStore } from '@/stores/PostsStore';
import { useUsersStore } from '@/stores/UsersStore';

import PostList from '@/components/PostList.vue';

const { userPostsCount, userPosts, userThreadsCount, userThreads } = usePostsStore();
const { authUser: user } = useUsersStore();
</script>
<template>
  <div class="container">
    <div class="flex-grid">
      <div class="col-3 push-top">
        <div class="profile-card">
          <p class="text-center">
            <img :src="user.avatar" :alt="`${user.name} profile picture`" class="avatar-xlarge" />
          </p>

          <h1 class="title">{{ user.username }}</h1>

          <p class="text-lead">{{ user.name }}</p>

          <p class="text-justify">{{ user.bio || "No bio specified." }}</p>

          <span class="online">{{ user.username }} is online</span>

          <div class="stats">
            <span>{{ userPostsCount }} posts</span>
            <span>{{ userThreadsCount }} threads</span>
          </div>

          <hr />

          <p v-if="user.website" class="text-center text-large">
            <i class="fa fa-globe"></i>
            <a :href="user.website">{{ user.website }}</a>
          </p>
        </div>

        <p class="text-center text-xsmall text-faded">
          Member since june 2003, last visited 4 hours ago
        </p>

        <div class="text-center">
          <hr />
          <a href="edit-profile.html" class="btn-green btn-small">Edit Profile</a>
        </div>
      </div>

      <div class="col-7 push-top">
        <div class="profile-header">
          <span class="text-lead"> Joker's recent activity </span>
          <a href="#">See only started threads?</a>
        </div>
        <hr />
        <PostList :posts="userPosts" />
      </div>
    </div>
  </div>
</template>
