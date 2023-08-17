import type { Skills } from "@/types/Skills";

export const skills: Skills[] = [
  {
    name: "JavaScript",
    icon: "javascript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    description_pl:
      "JavaScript jest językiem programowania, który dodaje interaktywność do Twojej witryny. Dzieje się tak w grach, w zachowaniu odpowiedzi po naciśnięciu przycisków lub podczas wprowadzania danych w formularzach; ze stylowaniem dynamicznym; z animacją itp. Ten artykuł pomoże Ci rozpocząć pracę z tym ekscytującym językiem i da Ci pojęcie o tym, co jest możliwe.",
    description_en:
      "JavaScript is a programming language that adds interactivity to your website. This happens in games, in the behavior of responses when buttons are pressed or with data entry on forms; with dynamic styling; with animation, etc. This article helps you get started with this exciting language and gives you an idea of what is possible.",
  },
  {
    name: "React",
    icon: "react",
    url: "https://reactjs.org/",
    description_pl:
      "React to biblioteka JavaScript, która pomaga w tworzeniu interfejsów użytkownika. Jest utrzymywana przez Facebook, Instagram i społeczność programistów i firm. React może być używany jako podstawa w tworzeniu aplikacji jednostronicowych lub mobilnych. Jednak React jest biblioteką interfejsu użytkownika, a nie pełnym frameworkiem MVC, więc jest często używany z innymi bibliotekami lub frameworkami, takimi jak AngularJS.",
    description_en:
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook, Instagram and a community of individual developers and corporations. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing.",
  },
  {
    name: "TypeScript",
    icon: "typescript",
    url: "https://www.typescriptlang.org/",
    description_pl:
      "TypeScript to język programowania open source opracowany i utrzymywany przez Microsoft. Jest to język typowany statycznie, który kompiluje się do języka JavaScript. TypeScript jest zaprojektowany do tworzenia dużych aplikacji i przekształcania się w JavaScript. Jest to język obiektowy, który pozwala na definiowanie typów danych, ale jest to opcjonalne. TypeScript jest kompilowany do JavaScript, więc jest to rozszerzenie JavaScript.",
    description_en:
      "TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript. It is a strongly typed object-oriented compiled language which compiled into JavaScript, thus it is a JavaScript superset language.",
  },

  {
    name: "Next.js",
    icon: "nextjs",
    url: "https://nextjs.org/",
    description_pl:
      "Next.js to framework React, który pozwala na renderowanie aplikacji po stronie serwera. Jest to framework open source, który jest używany do tworzenia aplikacji internetowych w oparciu o React.js. Jest to framework JavaScript, który jest używany do tworzenia aplikacji internetowych. Jest to framework open source, który jest używany do tworzenia aplikacji internetowych w oparciu o React.js. Jest to framework JavaScript, który jest używany do tworzenia aplikacji internetowych.",
    description_en:
      "Next.js is a React framework that allows you to render applications on the server side. It is an open source framework that is used to create web applications based on React.js. It is a JavaScript framework that is used to create web applications. It is an open source framework that is used to create web applications based on React.js. It is a JavaScript framework that is used to create web applications.",
  },
  {
    name: "Node.js",
    icon: "nodejs",
    url: "https://nodejs.org/en/",
    description_pl:
      "Node.js to środowisko uruchomieniowe JavaScript, które pozwala na uruchamianie kodu JavaScript poza przeglądarką. Jest to platforma oparta na silniku JavaScript V8 Chrome. Node.js jest używany do tworzenia aplikacji sieciowych i API. Jest to platforma open source, która jest używana do tworzenia aplikacji w środowisku uruchomieniowym JavaScript. Node.js pozwala na tworzenie aplikacji sieciowych, które mogą być uruchamiane na wielu serwerach, takich jak Apache, Nginx itp. Jest to platforma wieloplatformowa.",
    description_en:
      "Node.js is a JavaScript runtime environment that allows you to run JavaScript code outside of a browser. It is based on the V8 JavaScript engine of the Chrome browser. Node.js is used to create network applications and APIs. It is an open source platform that is used to create applications in the JavaScript runtime environment. Node.js allows you to create network applications that can be run on multiple servers such as Apache, Nginx, etc. It is a cross-platform platform.",
  },
  {
    name: "Prisma",
    icon: "prisma",
    url: "https://www.prisma.io/",
    description_pl: "Prisma to ORM, który pozwala na pracę z bazą danych.",
    description_en: "Prisma is an ORM that allows you to work with a database.",
  },
  {
    name: "GraphQL",
    icon: "graphql",
    url: "https://graphql.org/",
    description_pl:
      "GraphQL to język zapytań, który pozwala na pobieranie danych z serwera. Jest to język zapytań, który jest używany do pobierania danych z serwera. GraphQL jest językiem zapytań, który jest używany do pobierania danych z serwera.",
    description_en:
      "GraphQL is a query language that allows you to retrieve data from the server. It is a query language that is used to retrieve data from the server. GraphQL is a query language that is used to retrieve data from the server.",
  },

  {
    name: "Docker",
    icon: "docker",
    url: "https://www.docker.com/",
    description_pl:
      "Docker to platforma, która pozwala na tworzenie, testowanie i wdrażanie aplikacji w kontenerach. Kontenery są izolowane od siebie i zapewniają środowisko, w którym aplikacja może być uruchomiona niezależnie od systemu operacyjnego hosta. Docker jest platformą open source, która jest używana do tworzenia aplikacji w kontenerach. Jest to platforma wieloplatformowa, która jest używana do tworzenia aplikacji w kontenerach.",
    description_en:
      "Docker is a platform that allows you to create, test and deploy applications in containers. Containers are isolated from each other and provide an environment in which the application can run independently of the host operating system. Docker is an open source platform that is used to create applications in containers. It is a cross-platform platform that is used to create applications in containers.",
  },
  {
    name: "Kubernetes",
    icon: "kubernetes",
    url: "https://kubernetes.io/",
    description_pl:
      "Kubernetes to platforma open source, która pozwala na automatyzację, skalowanie i wdrażanie aplikacji w kontenerach. Jest to platforma open source, która jest używana do automatyzacji, skalowania i wdrażania aplikacji w kontenerach. Kubernetes jest platformą open source, która jest używana do automatyzacji, skalowania i wdrażania aplikacji w kontenerach.",
    description_en:
      "Kubernetes is an open source platform that allows you to automate, scale and deploy applications in containers. It is an open source platform that is used to automate, scale and deploy applications in containers. Kubernetes is an open source platform that is used to automate, scale and deploy applications in containers.",
  },
  {
    name: "GCP",
    icon: "gcp",
    url: "https://cloud.google.com/",
    description_pl:
      "Google Cloud Platform to platforma chmurowa, która pozwala na tworzenie, testowanie i wdrażanie aplikacji w chmurze. Jest to platforma chmurowa, która jest używana do tworzenia aplikacji w chmurze. Google Cloud Platform jest platformą chmurową, która jest używana do tworzenia aplikacji w chmurze.",
    description_en:
      "Google Cloud Platform is a cloud platform that allows you to create, test and deploy applications in the cloud. It is a cloud platform that is used to create applications in the cloud. Google Cloud Platform is a cloud platform that is used to create applications in the cloud.",
  },

  {
    name: "Git",
    icon: "git",
    url: "https://git-scm.com/",
    description_pl:
      "Git to system kontroli wersji, który pozwala na śledzenie zmian w kodzie źródłowym podczas pracy nad projektem. Jest to system kontroli wersji, który jest używany do śledzenia zmian w kodzie źródłowym podczas pracy nad projektem. Git jest systemem kontroli wersji, który jest używany do śledzenia zmian w kodzie źródłowym podczas pracy nad projektem.",
    description_en:
      "Git is a version control system that allows you to track changes to source code while working on a project. It is a version control system that is used to track changes to source code while working on a project. Git is a version control system that is used to track changes to source code while working on a project.",
  },
  {
    name: "GitHub",
    icon: "github",
    url: "https://github.com",
    description_pl:
      "GitHub to platforma, która pozwala na przechowywanie kodu źródłowego i współpracę nad nim. Jest to platforma, która jest używana do przechowywania kodu źródłowego i współpracy nad nim. GitHub jest platformą, która jest używana do przechowywania kodu źródłowego i współpracy nad nim.",
    description_en:
      "GitHub is a platform that allows you to store and collaborate on source code. It is a platform that is used to store and collaborate on source code. GitHub is a platform that is used to store and collaborate on source code.",
  },
  {
    name: "VS Code",
    icon: "vscode",
    url: "https://code.visualstudio.com/",
    description_pl:
      "Visual Studio Code to edytor kodu źródłowego, który pozwala na tworzenie i edycję kodu źródłowego. Jest to edytor kodu źródłowego, który jest używany do tworzenia i edycji kodu źródłowego. Visual Studio Code jest edytorem kodu źródłowego, który jest używany do tworzenia i edycji kodu źródłowego.",
    description_en:
      "Visual Studio Code is a source code editor that allows you to create and edit source code. It is a source code editor that is used to create and edit source code. Visual Studio Code is a source code editor that is used to create and edit source code.",
  },
  {
    name: "Figma",
    icon: "figma",
    url: "https://www.figma.com/",
    description_pl:
      "Figma to platforma, która pozwala na tworzenie projektów graficznych. Jest to platforma, która jest używana do tworzenia projektów graficznych. Figma jest platformą, która jest używana do tworzenia projektów graficznych.",
    description_en:
      "Figma is a platform that allows you to create graphic projects. It is a platform that is used to create graphic projects. Figma is a platform that is used to create graphic projects.",
  },
];
