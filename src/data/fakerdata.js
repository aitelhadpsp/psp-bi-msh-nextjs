import { faker } from "@faker-js/faker";

export const tagColorMap = [
  { tag: "Cardiologie", color: "bg-blue-200" },
  { tag: "Endocrinologie", color: "bg-green-200" },
  { tag: "Neurologie", color: "bg-yellow-200" },
  { tag: "Pneumologie", color: "bg-orange-200" },
  { tag: "Oncologie", color: "bg-purple-200" },
  { tag: "Hématologie", color: "bg-red-200" },
];
export default function generate() {
  return Array.from(Array(100).keys()).map((e) => ({
    id: e,
    date: faker.date.anytime().toString(),
    title: faker.lorem.sentence(),
    image: faker.image.urlLoremFlickr({
      category: faker.science.chemicalElement().name,
    }),
    content: faker.lorem.paragraphs(),
    author: faker.person.fullName(),
    job: faker.person.jobTitle(),
  }));
}
