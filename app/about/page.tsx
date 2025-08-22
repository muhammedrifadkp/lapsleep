import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-slate-800 sm:text-5xl md:text-6xl">
              About <span className="text-blue-600">lapsleep</span>
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-slate-600 mx-auto">
              Helping families find rest through evidence-informed baby sleep solutions
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Intro Section */}
          <div className="px-6 py-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-8 text-slate-700">
                Lapsleep is a small team of parents and sleep educators focused on calm, evidence‑informed
                baby sleep. We curate practical guides, gentle routines, and thoughtfully designed
                products to help families rest.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative h-64 md:h-96 w-full">
            <Image
              src="https://norani.com/cdn/shop/articles/baby-sleeping-norani.JPG?v=1568145929"
              alt="Peaceful baby sleeping"
              fill
              className="object-cover"
            />
          </div>

          {/* Our Approach Section */}
          <div className="px-6 py-8 md:p-12 bg-blue-50">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Approach</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Gentle and Responsive</h3>
                <p className="text-slate-600">We favor practices that respect your baby's cues and emotional needs, promoting secure attachment.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Simple and Practical</h3>
                <p className="text-slate-600">Actionable advice and short guides you can apply tonight, without overwhelming theory or complexity.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Safe and Trustworthy</h3>
                <p className="text-slate-600">We reference mainstream pediatric guidance from organizations like the AAP and NHS to ensure safety.</p>
              </div>
            </div>
          </div>

          {/* Why Trust Us Section */}
          <div className="px-6 py-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Why Trust Us</h2>
            
            <div className="prose prose-lg max-w-none text-slate-700">
              <p>
                Our content is carefully reviewed by certified sleep consultants and pediatric experts
                for clarity, accuracy, and safety. We test products extensively for usability, durability,
                and value, ensuring we recommend only what truly works for real families.
              </p>
              
              <p>
                We organize advice by age and common sleep challenges, making it easy to find exactly
                what you need for your specific situation. Our team includes:
              </p>
              
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>Certified pediatric sleep consultants</li>
                <li>Child development specialists</li>
                <li>Parents with firsthand experience navigating sleep challenges</li>
                <li>Healthcare professionals who review our medical content</li>
              </ul>
            </div>
          </div>

          {/* Our Story Section */}
          <div className="px-6 py-8 md:p-12 bg-slate-100">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Story</h2>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <p className="text-slate-700 mb-4">
                  Lapsleep was founded in 2018 by a group of parents who struggled with their own children's
                  sleep patterns. Frustrated by the conflicting advice and extreme approaches in many sleep resources,
                  we sought to create a balanced, evidence-based alternative.
                </p>
                
                <p className="text-slate-700 mb-4">
                  What began as a small blog sharing our personal experiences has grown into a comprehensive
                  resource used by thousands of families worldwide. We've maintained our core mission: to provide
                  compassionate, practical guidance that respects both babies' needs and parents' wellbeing.
                </p>
                
                <p className="text-slate-700">
                  Today, we're proud to have helped over 15,000 families improve their sleep situations while
                  maintaining strong, loving connections with their children.
                </p>
              </div>
              
              <div className="md:w-1/3">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">By the Numbers</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-3xl font-bold text-blue-600">15,000+</p>
                      <p className="text-slate-600">Families helped</p>
                    </div>
                    
                    <div>
                      <p className="text-3xl font-bold text-blue-600">98%</p>
                      <p className="text-slate-600">Of parents report improved sleep</p>
                    </div>
                    
                    <div>
                      <p className="text-3xl font-bold text-blue-600">12</p>
                      <p className="text-slate-600">Certified experts on our team</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Commitment Section */}
          <div className="px-6 py-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Commitment to You</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-slate-800">Evidence-Based Guidance</h4>
                  <p className="mt-2 text-slate-600">
                    We continuously update our recommendations based on the latest research in pediatric sleep science.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-slate-800">Community Support</h4>
                  <p className="mt-2 text-slate-600">
                    Join our community of parents supporting each other through the journey of parenthood.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-slate-800">No Extreme Methods</h4>
                  <p className="mt-2 text-slate-600">
                    We never recommend cry-it-out methods or approaches that undermine the parent-child bond.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-slate-800">Respect for All Choices</h4>
                  <p className="mt-2 text-slate-600">
                    We provide options, not prescriptions, recognizing that each family's situation is unique.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="px-6 py-8 md:p-12 bg-blue-600 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Better Sleep?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Explore our resources, read our guides, or join our supportive community of parents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition duration-300">
                Browse Sleep Guides
              </button>
              <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                Join Our Community
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}