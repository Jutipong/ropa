<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
          </q-avatar>
          Title
        </q-toolbar-title>
        <q-space />
        <q-btn :ripple="false" align="around" label="Logout" dense flat icon="logout" @click="Logout"></q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <!-- page content -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';

export default {
  setup() {
    const $q = useQuasar();
    const router = useRouter();
    const leftDrawerOpen = ref(false);

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    };

    const Logout = (_) => {
      $q.dialog({
        html: true,
        title: '<div class="text-red"> Confirm</div>',
        // title: '<i class="eva eva-alert-triangle-outline negative"></i> Confirm',
        message: 'Are you sure you want to log out?',
        cancel: true,
        persistent: true,
        ok: {
          flat: true,
          color: 'negative',
        },
      }).onOk(() => {
        router.push('/login');
      });
    };

    return {
      leftDrawerOpen,
      toggleLeftDrawer,
      Logout,
    };
  },
};
</script>
