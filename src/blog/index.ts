import { getImage } from "../utils";
import { bağKurma } from "./bağKurma";
import { bonding } from "./bonding";
import { brainNetworks } from "./brainNetworks";
import { gerçeklik } from "./gerçeklik";
import { ikiSistem } from "./ikiSistem";
import { reality } from "./reality";
import { twoSystems } from "./twoSystems";
import { zihinAğları } from "./zihinAğları";

export const blogs = [
  {
    Lang: "en",
    Title: "The Brain's Bonding Strategy",
    Article: bonding,
    Image: getImage("heart"),
    Slug: "the-brains-bonding-strategy",
    PublishTime: "2025-07-20T22:51:00.000Z",
  },
  {
    Lang: "tr",
    Title: "Beynin Bağ Kurma Stratejisi",
    Article: bağKurma,
    Image: getImage("heart"),
    Slug: "beynin-bag-kurma-stratejisi",
    PublishTime: "2025-07-20T22:51:00.000Z",
  },
  {
    Lang: "en",
    Title: "Brain Networks: Understanding the Mechanics",
    Article: brainNetworks,
    Image: getImage("brain-mechanism"),
    Slug: "brain-networks-understanding-the-mechanics",
    PublishTime: "2025-06-26T23:40:00.000Z",
  },
  {
    Lang: "tr",
    Title: "Beyin Ağları: Mekaniğini Anlamak",
    Article: zihinAğları,
    Image: getImage("brain-mechanism"),
    Slug: "beyin-aglari-mekanigini-anlamak",
    PublishTime: "2025-06-26T23:40:00.000Z",
  },
  {
    Lang: "en",
    Title: "Two Systems, One Decision: Who Controls Your Thoughts?",
    Article: twoSystems,
    Image: getImage("thinker"),
    Slug: "two-systems-one-decision-who-controls-your-thoughts",
    PublishTime: "2025-05-31T18:30:00.000Z",
  },
  {
    Lang: "tr",
    Title: "İki Sistem, Bir Karar: Düşüncelerin Kontrolü Kimde?",
    Article: ikiSistem,
    Image: getImage("thinker"),
    Slug: "iki-sistem-bir-karar-dusuncelerin-kontrolu-kimde",
    PublishTime: "2025-05-31T18:30:00.000Z",
  },
  {
    Lang: "en",
    Title: "How the Mind Constructs Reality?",
    Article: reality,
    Image: getImage("brain"),
    Slug: "how-the-mind-constructs-reality",
    PublishTime: "2025-05-04T08:03:27.671Z",
  },
  {
    Lang: "tr",
    Title: "Zihin, Gerçekliği Nasıl İnşa Eder?",
    Article: gerçeklik,
    Image: getImage("brain"),
    Slug: "zihin-gercekligi-nasil-insa-eder",
    PublishTime: "2025-05-04T08:03:27.671Z",
  },
];
