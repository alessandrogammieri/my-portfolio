export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  slug?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Progetto 1",
    description: "Descrizione del progetto 1",
    image: "/images/projects/image.jpeg",
    slug: "progetto-1",
  },
  {
    id: "2",
    title: "Progetto 2",
    description: "Descrizione del progetto 2",
    image: "/images/projects/image2.jpeg",
    slug: "progetto-2",
  },
  {
    id: "3",
    title: "Progetto 3",
    description: "Descrizione del progetto 3",
    image: "/images/projects/image.jpeg",
    slug: "progetto-3",
  },
  {
    id: "4",
    title: "Progetto 4",
    description: "Descrizione del progetto 4",
    image: "/images/projects/image2.jpeg",
    slug: "progetto-4",
  },
];
