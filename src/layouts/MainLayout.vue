<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar class="hidden md:block">
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
          </q-avatar>
          Ropa system
        </q-toolbar-title>
        <q-space />
        <q-btn
          :ripple="false"
          align="around"
          label="Logout"
          dense
          flat
          icon="logout"
          @click="Logout"
        ></q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      class="bgxx left-navigation text-white"
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      elevated
      :width="250"
      style="
        background-image: url(https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg) !important;
        background-size: cover !important;
      "
    >
      <div class="full-height" :class="$q.dark.isActive ? 'drawer_dark' : 'drawer_normal'">
        <div style="height: calc(100% - 150px); padding: 10px">
          <q-scroll-area style="height: 100%; margin-top: 150px">
            <q-list padding>
              <template v-for="(menuItem, index) in menus" :key="index">
                <q-item
                  active-class="tab-active"
                  :to="menuItem.link"
                  exact
                  class="q-ma-sm navigation-item"
                  clickable
                  v-ripple
                >
                  <q-item-section avatar>
                    <q-icon :name="menuItem.icon"></q-icon>
                  </q-item-section>
                  <q-item-section>{{ menuItem.label }}</q-item-section>
                </q-item>
              </template>
            </q-list>
          </q-scroll-area>
        </div>
      </div>
      <q-img
        align="center"
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div>User login :</div>
          <div>Permission :</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <!-- page content -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref, reactive } from 'vue';
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

    const menus = reactive([
      {
        label: 'Quiz Test',
        icon: 'eva-book-open-outline',
        link: '/',
      },
      {
        label: 'Master Gropus',
        icon: 'eva-cube-outline',
        link: '/groups',
      },
      {
        label: 'Master Question',
        icon: 'eva-question-mark-outline',
        link: '/question',
      },
    ]);

    const Logout = (_) => {
      $q.dialog({
        html: true,
        title: '<div class="text-red"> Confirm</div>',
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
      menus,
    };
  },
};
</script>

<style scoped>
.bgxx {
  background-image: url(https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg) !important;
  background-size: cover !important;
}

.drawer_normal {
  background-color: rgba(1, 1, 1, 0.75);
}

.drawer_dark {
  background-color: #010101f2;
}

.navigation-item {
  border-radius: 5px;
}

.tab-active {
  background-color: green;
}

body {
  background: #f1f1f1 !important;
}

.header_normal {
  background: linear-gradient(145deg, rgb(32, 106, 80) 15%, rgb(21, 57, 102) 70%);
}

.header_dark {
  background: linear-gradient(145deg, rgb(61, 14, 42) 15%, rgb(14, 43, 78) 70%);
}
</style>
