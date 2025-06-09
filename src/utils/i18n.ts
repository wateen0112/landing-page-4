
export interface Translations {
  nav: {
    features: string;
    testimonials: string;
    pricing: string;
    faq: string;
    signIn: string;
    getStarted: string;
  };
  hero: {
    title: string;
    subtitle: string;
    getStarted: string;
    watchDemo: string;
    stats: {
      uptime: string;
      dataPoints: string;
      companies: string;
    };
  };
  auth: {
    signIn: {
      title: string;
      subtitle: string;
      email: string;
      password: string;
      button: string;
      noAccount: string;
      signUp: string;
    };
    signUp: {
      title: string;
      subtitle: string;
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
      button: string;
      hasAccount: string;
      signIn: string;
    };
  };
}

export const translations: Record<string, Translations> = {
  en: {
    nav: {
      features: "Features",
      testimonials: "Testimonials",
      pricing: "Pricing",
      faq: "FAQ",
      signIn: "Sign In",
      getStarted: "Get Started"
    },
    hero: {
      title: "Unleash the Power of Data",
      subtitle: "Transform your business with AI-powered analytics and insights. Make data-driven decisions that accelerate growth and innovation.",
      getStarted: "Get Started Free",
      watchDemo: "Watch Demo",
      stats: {
        uptime: "Uptime",
        dataPoints: "Data Points",
        companies: "Companies"
      }
    },
    auth: {
      signIn: {
        title: "Welcome back",
        subtitle: "Sign in to your account to continue",
        email: "Email",
        password: "Password",
        button: "Sign In",
        noAccount: "Don't have an account?",
        signUp: "Sign up"
      },
      signUp: {
        title: "Create an account",
        subtitle: "Join thousands of companies using DataFlow",
        name: "Full Name",
        email: "Email",
        password: "Password",
        confirmPassword: "Confirm Password",
        button: "Create Account",
        hasAccount: "Already have an account?",
        signIn: "Sign in"
      }
    }
  },
  es: {
    nav: {
      features: "Características",
      testimonials: "Testimonios",
      pricing: "Precios",
      faq: "Preguntas",
      signIn: "Iniciar Sesión",
      getStarted: "Comenzar"
    },
    hero: {
      title: "Libera el Poder de los Datos",
      subtitle: "Transforma tu negocio con análisis e insights impulsados por IA. Toma decisiones basadas en datos que aceleren el crecimiento y la innovación.",
      getStarted: "Comenzar Gratis",
      watchDemo: "Ver Demo",
      stats: {
        uptime: "Tiempo Activo",
        dataPoints: "Puntos de Datos",
        companies: "Empresas"
      }
    },
    auth: {
      signIn: {
        title: "Bienvenido de vuelta",
        subtitle: "Inicia sesión en tu cuenta para continuar",
        email: "Correo Electrónico",
        password: "Contraseña",
        button: "Iniciar Sesión",
        noAccount: "¿No tienes una cuenta?",
        signUp: "Regístrate"
      },
      signUp: {
        title: "Crear una cuenta",
        subtitle: "Únete a miles de empresas que usan DataFlow",
        name: "Nombre Completo",
        email: "Correo Electrónico",
        password: "Contraseña",
        confirmPassword: "Confirmar Contraseña",
        button: "Crear Cuenta",
        hasAccount: "¿Ya tienes una cuenta?",
        signIn: "Iniciar sesión"
      }
    }
  },
  fr: {
    nav: {
      features: "Fonctionnalités",
      testimonials: "Témoignages",
      pricing: "Tarifs",
      faq: "FAQ",
      signIn: "Se Connecter",
      getStarted: "Commencer"
    },
    hero: {
      title: "Libérez la Puissance des Données",
      subtitle: "Transformez votre entreprise avec des analyses et des insights alimentés par l'IA. Prenez des décisions basées sur les données qui accélèrent la croissance et l'innovation.",
      getStarted: "Commencer Gratuitement",
      watchDemo: "Voir la Démo",
      stats: {
        uptime: "Temps de Fonctionnement",
        dataPoints: "Points de Données",
        companies: "Entreprises"
      }
    },
    auth: {
      signIn: {
        title: "Bon retour",
        subtitle: "Connectez-vous à votre compte pour continuer",
        email: "Email",
        password: "Mot de Passe",
        button: "Se Connecter",
        noAccount: "Vous n'avez pas de compte ?",
        signUp: "S'inscrire"
      },
      signUp: {
        title: "Créer un compte",
        subtitle: "Rejoignez des milliers d'entreprises utilisant DataFlow",
        name: "Nom Complet",
        email: "Email",
        password: "Mot de Passe",
        confirmPassword: "Confirmer le Mot de Passe",
        button: "Créer un Compte",
        hasAccount: "Vous avez déjà un compte ?",
        signIn: "Se connecter"
      }
    }
  },
  de: {
    nav: {
      features: "Funktionen",
      testimonials: "Referenzen",
      pricing: "Preise",
      faq: "FAQ",
      signIn: "Anmelden",
      getStarted: "Loslegen"
    },
    hero: {
      title: "Entfesseln Sie die Macht der Daten",
      subtitle: "Transformieren Sie Ihr Unternehmen mit KI-gestützten Analysen und Erkenntnissen. Treffen Sie datengesteuerte Entscheidungen, die Wachstum und Innovation beschleunigen.",
      getStarted: "Kostenlos Starten",
      watchDemo: "Demo Ansehen",
      stats: {
        uptime: "Betriebszeit",
        dataPoints: "Datenpunkte",
        companies: "Unternehmen"
      }
    },
    auth: {
      signIn: {
        title: "Willkommen zurück",
        subtitle: "Melden Sie sich in Ihrem Konto an, um fortzufahren",
        email: "E-Mail",
        password: "Passwort",
        button: "Anmelden",
        noAccount: "Haben Sie noch kein Konto?",
        signUp: "Registrieren"
      },
      signUp: {
        title: "Konto erstellen",
        subtitle: "Schließen Sie sich Tausenden von Unternehmen an, die DataFlow nutzen",
        name: "Vollständiger Name",
        email: "E-Mail",
        password: "Passwort",
        confirmPassword: "Passwort Bestätigen",
        button: "Konto Erstellen",
        hasAccount: "Haben Sie bereits ein Konto?",
        signIn: "Anmelden"
      }
    }
  },
  ar: {
    nav: {
      features: "الميزات",
      testimonials: "الشهادات",
      pricing: "التسعير",
      faq: "الأسئلة الشائعة",
      signIn: "تسجيل الدخول",
      getStarted: "ابدأ الآن"
    },
    hero: {
      title: "اطلق قوة البيانات",
      subtitle: "حول أعمالك باستخدام التحليلات والرؤى المدعومة بالذكاء الاصطناعي. اتخذ قرارات قائمة على البيانات تسرع النمو والابتكار.",
      getStarted: "ابدأ مجاناً",
      watchDemo: "شاهد العرض التوضيحي",
      stats: {
        uptime: "وقت التشغيل",
        dataPoints: "نقاط البيانات",
        companies: "الشركات"
      }
    },
    auth: {
      signIn: {
        title: "مرحباً بعودتك",
        subtitle: "سجل دخولك إلى حسابك للمتابعة",
        email: "البريد الإلكتروني",
        password: "كلمة المرور",
        button: "تسجيل الدخول",
        noAccount: "ليس لديك حساب؟",
        signUp: "سجل الآن"
      },
      signUp: {
        title: "إنشاء حساب",
        subtitle: "انضم إلى آلاف الشركات التي تستخدم DataFlow",
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        password: "كلمة المرور",
        confirmPassword: "تأكيد كلمة المرور",
        button: "إنشاء حساب",
        hasAccount: "لديك حساب بالفعل؟",
        signIn: "سجل دخولك"
      }
    }
  }
};

export const useTranslation = (lang: string) => {
  return translations[lang] || translations.en;
};

export const isRTL = (lang: string) => {
  return lang === 'ar';
};
