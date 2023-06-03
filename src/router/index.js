import { createRouter, createWebHistory } from "vue-router";
import CreatePage from "../components/Catalog/CreatePage.vue";
import LivePage from "../components/Catalog/LivePage.vue";
import ManagerPage from "../components/Catalog/ManagerPage.vue";
import DraftPage from "../components/Catalog/DraftPage.vue";
import BottomNav from "../components/Navbar/BottomNav.vue";
import NotesPage from "../components/Catalog/NotesPage.vue";
import FabricCreate from "../components/Fabric/FabricCreate.vue";
import FabricSampling from "../components/Fabric/FabricSampling.vue";
import FabricPO from "../components/Fabric/FabricPO.vue";
import FabricManage from "../components/Fabric/FabricManage.vue";
import FabricNotes from "../components/Fabric/FabricNotes.vue";
import SamplingPage from "../components/BrandSampling/SamplingPage.vue";
const routes = [
  {
    path: "/CreatePage",
    name: "CreatePage",
    component: CreatePage,
  },
  {
    path: "/LivePage",
    name: "LivePage",
    component: LivePage,
  },
  {
    path: "/ManagerPage",
    name: "ManagerPage",
    component: ManagerPage,
  },
  {
    path: "/DraftPage",
    name: "DraftPage",
    component: DraftPage,
  },
  {
    path: "/NotesPage",
    name: "NotesPage",
    component: NotesPage,
  },
  {
    path: "/FabricCreate",
    name: "FabricCreate",
    component: FabricCreate,
  },
  {
    path: "/FabricPO",
    name: "FabricPO",
    component: FabricPO,
  },
  {
    path: "/FabricManage",
    name: "FabricManage",
    component: FabricManage,
  },
  {
    path: "/FabricSampling",
    name: "FabricSampling",
    component: FabricSampling,
  },
  {
    path: "/FabricNotes",
    name: "FabricNotes",
    component: FabricNotes,
  },
  {
    path:"/BottomNav",
    name:"BottomNav",
    component: BottomNav
  },
  {
    path:"/SamplingPage",
    name:"SamplingPage",
    component: SamplingPage
  },
 
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
