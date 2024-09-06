const mockUrls = [
  "https://utfs.io/f/2658af96-7d5c-40e8-9f58-51cbeffc63e0-dz45mc.jpg",
  "https://utfs.io/f/bb38714c-f3b4-4546-ab99-e30f287e466f-f2sgdl.jpg",
  "https://utfs.io/f/e668bcad-91c0-442b-bec0-e7209f1e0a64-i2ezhv.jpg",
  "https://utfs.io/f/cf63dade-c483-43a3-a849-b165c5b580d6-aav43h.png",
];

const mockImages = mockUrls.map((url, index) => ({ id: index + 1, url }));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-5">
        {mockImages.map((image) => {
          return (
            <img
              alt="test"
              src={image.url}
              key={image.id}
              className="w-48 object-contain"
            />
          );
        })}
      </div>
    </main>
  );
}
