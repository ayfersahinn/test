export default function Features() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
        {/* Card */}
        <div className="size-full bg-white shadow-lg rounded-lg p-5">
          <div className="flex items-center gap-x-4 mb-3">
            <div className="inline-flex justify-center items-center size-15.5 rounded-full border-4 border-violet-50 bg-violet-100">
              {/* Icon */}
              <svg
                className="shrink-0 size-6 text-violet-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="13.5" cy="6.5" r=".5" />
                <circle cx="17.5" cy="10.5" r=".5" />
                <circle cx="8.5" cy="7.5" r=".5" />
                <circle cx="6.5" cy="12.5" r=".5" />
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
              </svg>
            </div>
            <div className="shrink-0">
              <h3 className="block text-lg font-semibold text-gray-800">
                Dosya Tabanlı Routing
              </h3>
            </div>
          </div>
          <p className="text-gray-600">
            Next.js, sayfaları otomatik olarak dosya tabanlı yönlendirir. app
            klasörüne dosya ekleyerek yeni sayfalar oluşturabilirsiniz.
          </p>
        </div>
        {/* End Card */}

        {/* Card */}
        <div className="size-full bg-white shadow-lg rounded-lg p-5">
          <div className="flex items-center gap-x-4 mb-3">
            <div className="inline-flex justify-center items-center size-15.5 rounded-full border-4 border-violet-50 bg-violet-100">
              {/* Icon */}
              <svg
                className="shrink-0 size-6 text-violet-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 3h20" />
                <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
                <path d="m7 21 5-5 5 5" />
              </svg>
            </div>
            <div className="shrink-0">
              <h3 className="block text-lg font-semibold text-gray-800">
                Sunucu Tarafı Rendering (SSR)
              </h3>
            </div>
          </div>
          <p className="text-gray-600">
            Next.js, sayfaları sunucu tarafında render ederek SEO ve performans
            avantajı sağlar.
          </p>
        </div>
        {/* End Card */}

        {/* Card */}
        <div className="size-full bg-white shadow-lg rounded-lg p-5">
          <div className="flex items-center gap-x-4 mb-3">
            <div className="inline-flex justify-center items-center size-15.5 rounded-full border-4 border-violet-50 bg-violet-100">
              {/* Icon */}
              <svg
                className="shrink-0 size-6 text-violet-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                <path d="M2 7h20" />
                <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
              </svg>
            </div>
            <div className="shrink-0">
              <h3 className="block text-lg font-semibold text-gray-800">
                API Routes
              </h3>
            </div>
          </div>
          <p className="text-gray-600">
            Next.js ile backend API endpoint'leri oluşturabilir, sunucu tarafı
            işlemlerini kolayca yönetebilirsiniz.
          </p>
        </div>
        {/* End Card */}

        {/* Card */}
        <div className="size-full bg-white shadow-lg rounded-lg p-5">
          <div className="flex items-center gap-x-4 mb-3">
            <div className="inline-flex justify-center items-center size-15.5 rounded-full border-4 border-violet-50 bg-violet-100">
              {/* Icon */}
              <svg
                className="shrink-0 size-6 text-violet-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
                <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
                <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
                <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
              </svg>
            </div>
            <div className="shrink-0">
              <h3 className="block text-lg font-semibold text-gray-800">
                Otomatik Kod Bölme
              </h3>
            </div>
          </div>
          <p className="text-gray-600">
            Next.js, sayfa bazında otomatik kod bölme ile sadece gerekli olan
            JavaScript'i yükler ve performansı artırır.
          </p>
        </div>
        {/* End Card */}

        {/* Card */}
        <div className="size-full bg-white shadow-lg rounded-lg p-5">
          <div className="flex items-center gap-x-4 mb-3">
            <div className="inline-flex justify-center items-center size-15.5 rounded-full border-4 border-violet-50 bg-violet-100">
              {/* Icon */}
              <svg
                className="shrink-0 size-6 text-violet-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2" />
                <path d="m15.194 13.707 3.814 1.86-1.86 3.814" />
                <path d="M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4" />
              </svg>
            </div>
            <div className="shrink-0"></div>
            <h3 className="block text-lg font-semibold text-gray-800">
              Görsel Optimizasyonu
            </h3>
          </div>

          <p className="text-gray-600">
            Next.js Image bileşeni ile görseller otomatik olarak optimize edilir
            ve farklı cihazlara uygun şekilde sunulur.
          </p>
        </div>
        {/* End Card */}

        {/* Card */}
        <div className="size-full bg-white shadow-lg rounded-lg p-5">
          <div className="flex items-center gap-x-4 mb-3">
            <div className="inline-flex justify-center items-center size-15.5 rounded-full border-4 border-violet-50 bg-violet-100">
              {/* Icon */}
              <svg
                className="shrink-0 size-6 text-violet-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <circle cx="17.5" cy="17.5" r="3.5" />
              </svg>
            </div>
            <div className="shrink-0">
              <h3 className="block text-lg font-semibold text-gray-800">
                Statik Site Üretimi (SSG)
              </h3>
            </div>
          </div>
          <p className="text-gray-600">
            Next.js ile sayfalarınızı derleme zamanında statik olarak
            üretebilir, hızlı ve güvenli siteler oluşturabilirsiniz.
          </p>
        </div>
        {/* End Card */}
      </div>
    </div>
  );
}
