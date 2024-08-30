import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/user/HomeView.vue";
import FoundPet from "@/components/Lost And Found Items/FoundPet.vue";
import LostPet from "@/components/Lost And Found Items/LostPet.vue";
import LostList from "@/components/Lost And Found Items/LostList.vue";
import FoundList from "@/components/Lost And Found Items/FoundList.vue";
import Reports from "@/components/Lost And Found Items/Reports.vue";
import FoundPetDetails from "@/components/Lost And Found Items/FoundPetDetails.vue";
import LostPetDetails from "@/components/Lost And Found Items/LostPetDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/foundpet",
      name: "foundpet",
      component: FoundPet,
    },
    {
      path: "/reports",
      name: "reports",
      component: Reports,
    },
    {
      path: "/lostpet",
      name: "lostpet",
      component: LostPet,
    },
    {
      path: "/lostlist",
      name: "lostlist",
      component: LostList,
    },
    {
      path: "/foundlist",
      name: "foundlist",
      component: FoundList,
    },
    {
      path: "/foundpetdetails",
      name: "foundpetdetails",
      component: FoundPetDetails,
    },
    {
      path: "/lostpetdetails",
      name: "lostpetdetails",
      component: LostPetDetails,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/user/AboutView.vue"),
    },
    {
      path: "/browse",
      name: "browse",
      component: () => import("../views/user/BrowsePet.vue"),
    },
    {
      path: "/addpet",
      name: "addpet",
      component: () => import("../views/user/AddPet.vue"),
    },
    {
      path: "/lostandfound",
      name: "lostandfound",
      component: () => import("../views/user/LostFound.vue"),
    },
    {
      path: "/forum",
      name: "forum",
      component: () => import("../views/user/Forum.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/auth/Login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/auth/Register.vue"),
    },
    {
      path: "/petdetails",
      name: "petdetails",
      component: () => import("../components/PetDetails.vue"),
    },
    {
      path: "/questions",
      name: "questions",
      component: () => import("../components/Questions.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/user/Contact.vue"),
    },
    {
      path: "/donations",
      name: "donations",
      component: () => import("../views/user/Donations.vue"),
    },
    {
      path: "/ongiong",
      name: "ongiong",
      component: () => import("../components/Ongiong.vue"),
    },
    {
      path: "/general",
      name: "general",
      component: () => import("../components/ForumItems/General.vue"),
    },
    {
      path: "/health",
      name: "health",
      component: () => import("../components/ForumItems/Health.vue"),
    },
    {
      path: "/training",
      name: "training",
      component: () => import("../components/ForumItems/Training.vue"),
    },
    {
      path: "/comment",
      name: "comment",
      component: () => import("../views/user/Comment.vue"),
    },
    {
      path: "/topic/:id",
      name: "TopicDetail",
      component: () => import("../components/ForumItems/TopicDetail.vue"),
      props: (route) => ({ id: route.params.id }),
    },
    {
      path: "/profile",
      name: "Profile",
      component: () => import("../views/user/Profile.vue"),
    },
    {
      path: "/account",
      name: "account",
      component: () => import("../views/user/Profile/Account.vue"),
    },
    // user profile items
    {
      path: "/summary",
      name: "Summary",
      component: () => import("../components/UserProfileItems/Summary.vue"),
    },
    {
      path: "/managepetlistings",
      name: "ManagePetListings",
      component: () =>
        import("../components/UserProfileItems/ManagePetListings.vue"),
    },
    {
      path: "/applicants",
      name: "AdoptionApplicants",
      component: () =>
        import("../components/UserProfileItems/AdoptionApplicants.vue"),
    },
    {
      path: "/applicantformmodal",
      name: "ApplicationFormModal",
      component: () =>
        import("../components/UserProfileItems/ApplicationFormModal.vue"),
    },
    // admin
    {
      path: "/adminlayout",
      name: "AdminLayout",
      component: () => import("../views/admin/AdminLayout.vue"),
      meta: { showNavBar: false },
      children: [
        {
          path: "/dashboard",
          name: "Dashboard",
          component: () => import("../views/admin/Dashboard.vue"),
          meta: { showNavBar: false },
        },
        {
          path: "/petmanagement",
          name: "PetManagement",
          component: () => import("../views/admin/PetManagement.vue"),
          meta: { showNavBar: false },
        },
        {
          path: "/usermanagement",
          name: "UserManagement",
          component: () => import("../views/admin/UserManagement.vue"),
          meta: { showNavBar: false },
        },
        {
          path: "/applicationmanagement",
          name: "ApplicationManagement",
          component: () => import("../views/admin/ApplicationManagement.vue"),
          meta: { showNavBar: false },
        },
        {
          path: "/reportmanagement",
          name: "ReportManagement",
          component: () => import("../views/admin/ReportManagement.vue"),
          meta: { showNavBar: false },
        },
        {
          path: "/forummanagement",
          name: "ForumManagement",
          component: () => import("../views/admin/ForumManagement.vue"),
          meta: { showNavBar: false },
        },
      ],
    },
  ],
});

export default router;
