import { gerçeklik } from "./gerçeklik";
import { ikiSistem } from "./ikiSistem";
import { reality } from "./reality";
import { twoSystems } from "./twoSystems";

import brainImage from "../assets/blog/google-deepmind.jpg";
import thinkerImage from "../assets/blog/the-thinker.jpg";

export const blogs = [
  {
    Lang: "en",
    Title: "Two Systems, One Decision: Who Controls Your Thoughts?",
    Article: twoSystems,
    Image: thinkerImage,
    Slug: "two-systems-one-decision-who-controls-your-thoughts",
    PublishTime: "2025-05-31T18:30:00.000Z",
  },
  {
    Lang: "tr",
    Title: "İki Sistem, Bir Karar: Düşüncelerin Kontrolü Kimde?",
    Article: ikiSistem,
    Image: thinkerImage,
    Slug: "iki-sistem-bir-karar-dusuncelerin-kontrolu-kimde",
    PublishTime: "2025-05-31T18:30:00.000Z",
  },
  {
    Lang: "en",
    Title: "How the Mind Constructs Reality?",
    Article: reality,
    Image: brainImage,
    Slug: "how-the-mind-constructs-reality",
    PublishTime: "2025-05-04T08:03:27.671Z",
  },
  {
    Lang: "tr",
    Title: "Zihin, Gerçekliği Nasıl İnşa Eder?",
    Article: gerçeklik,
    Image: brainImage,
    Slug: "zihin-gercekligi-nasil-insa-eder",
    PublishTime: "2025-05-04T08:03:27.671Z",
  },
];
