import Image from "next/image";
import { SectionHeading } from "@/components/common/section-heading";

/** Static gallery of our past events — real Bangladeshi photos from Wikimedia Commons. */
const GALLERY_ITEMS = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Bangladesh_National_Museum_Blood_Donation_Program%2C_Dhaka%2C_2022-08-31_%28PID-0021388%29.jpg/960px-Bangladesh_National_Museum_Blood_Donation_Program%2C_Dhaka%2C_2022-08-31_%28PID-0021388%29.jpg",
    alt: "Blood donation program at Bangladesh National Museum, Dhaka",
    caption: "Blood donation program",
    place: "Dhaka",
    category: "Blood Donation",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Trash_collection_via_Rickshaw_in_Banani_Model_Town_01.jpg/960px-Trash_collection_via_Rickshaw_in_Banani_Model_Town_01.jpg",
    alt: "Trash collection via rickshaw in Banani Model Town, Dhaka",
    caption: "Community clean-up drive",
    place: "Banani, Dhaka",
    category: "Cleaning",
    className: "",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Lakkatura_Tea_Garden%2C_Sylhet.jpg/960px-Lakkatura_Tea_Garden%2C_Sylhet.jpg",
    alt: "Lakkatura tea garden, Sylhet",
    caption: "Tree plantation day",
    place: "Sylhet",
    category: "Plantation",
    className: "",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Each_morning_at_BRAC_schools_throughout_Bangladesh_children_create_a_circle_with_their_shoes_before_entering_the_classroom._%2810693841406%29.jpg/960px-Each_morning_at_BRAC_schools_throughout_Bangladesh_children_create_a_circle_with_their_shoes_before_entering_the_classroom._%2810693841406%29.jpg",
    alt: "Children outside a BRAC school classroom in Bangladesh",
    caption: "Teaching the little ones",
    place: "Rural Bangladesh",
    category: "Education",
    className: "",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Winter_Clothes_Distribution_Among_Orphans_of_Yatimkhana_of_Bangladesh_by_Needy_Foundation._01.jpg/960px-Winter_Clothes_Distribution_Among_Orphans_of_Yatimkhana_of_Bangladesh_by_Needy_Foundation._01.jpg",
    alt: "Winter clothes distribution among orphans by the Needy Foundation, Bangladesh",
    caption: "Winter clothes distribution",
    place: "Bangladesh",
    category: "Winter Clothes",
    className: "md:col-span-2",
  },
];

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  place: string;
  category: string;
  className?: string;
}

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-2xl bg-muted ${item.className ?? ""}`}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(min-width: 768px) 33vw, 100vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-4 pt-10">
        <figcaption>
          <span className="rounded-full bg-background/90 px-2.5 py-0.5 text-[11px] font-semibold text-foreground">
            {item.category}
          </span>
          <p className="mt-1.5 text-sm font-semibold text-background">
            {item.caption}
          </p>
          <p className="text-xs text-background/80">{item.place}</p>
        </figcaption>
      </div>
    </figure>
  );
}

export function EventGallery() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="Our journey"
        title="Moments from our previous events"
        description="A glimpse of the drives, plantations and classrooms we've been part of across Bangladesh."
      />

      <div className="mt-10 grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[190px] md:grid-cols-3 md:gap-4">
        {GALLERY_ITEMS.map((item) => (
          <GalleryCard key={item.caption} item={item} />
        ))}
      </div>
    </section>
  );
}
