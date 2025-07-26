import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  createIcons,
  Home,
  Star,
  ChefHat,
  Utensils,
  MessageCircle,
  MapPin,
  PhoneCall,
  Menu,
  X,
  Facebook,
  Instagram,
  BadgeInfo,
  Image,
  CalendarClock,
  ArrowUp,
  Twitter,
  Mail,
  Layers,
  MessageSquare,
  PenTool,
  Heart,
  Feather,
} from "lucide";

createIcons({
  icons: {
    Home,
    Feather,
    MessageSquare,
    PenTool,
    Heart,
    Star,
    Layers,
    Mail,
    ChefHat,
    Utensils,
    MessageCircle,
    MapPin,
    PhoneCall,
    Menu,
    X,
    Facebook,
    Instagram,
    BadgeInfo,
    Image,
    CalendarClock,
    ArrowUp,
    Twitter,
  },
  attrs: {
    class: "stroke-current", // para que tome color desde CSS
  },
});

gsap.registerPlugin(ScrollTrigger);

// Animaciones secciones
const animateSection = (selector: string, animation: gsap.TweenVars) => {
  gsap.from(selector, {
    scrollTrigger: {
      trigger: selector,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    duration: 1,
    opacity: 0,
    ...animation,
  });
};

// Animaciones específicas
animateSection("nav", { y: -50 });
animateSection("#hero", { y: 50 });
animateSection("#about", { y: 50 });
animateSection("#gallery", { y: 50 });
animateSection("#process", { y: 50 });
animateSection("#reviews", { x: -50 });
animateSection("#location", { scale: 0.9 });
animateSection("#contact", { y: 50 });
animateSection("#footer", { y: 50, opacity: 0, duration: 1 });

// Botón volver arriba
const backToTopBtn = document.getElementById("backToTop")!;
window.addEventListener("scroll", () => {
  backToTopBtn.classList.toggle("hidden", window.scrollY < 300);
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const menuBtn = document.getElementById("menuBtn")!;
const mobileMenu = document.getElementById("mobileMenu")!;
const closeMenuBtn = document.getElementById("closeMenuBtn")!;

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("-translate-x-full");
});

closeMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("-translate-x-full");
});

// Para cerrar menú al hacer click en algún link
(window as any).closeMobileMenu = () => {
  mobileMenu.classList.add("-translate-x-full");
};
