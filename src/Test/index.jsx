import React from 'react';
import { ChevronRight, Check, Star } from 'lucide-react';

const IngreliLandingPage = () => {
  const features = [
    {
      title: "Personalized Health Profiles",
      description: "Create profiles for your entire family and set unique health goals.",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "Ingredient Safety Alerts",
      description: "Get instant alerts for harmful ingredients like allergens, carcinogens, and more.",
      icon: "🚨"
    },
    {
      title: "Healthier Alternatives",
      description: "Discover better food options tailored to your dietary needs.",
      icon: "🥗"
    },
    {
      title: "Easy-to-Use Scanner",
      description: "Scan product labels in seconds with our powerful OCR technology.",
      icon: "📱"
    }
  ];

  const steps = [
    { title: "Scan", description: "Use your phone to scan any product label." },
    { title: "Analyze", description: "Ingreli extracts and analyzes the ingredients." },
    { title: "Get Insights", description: "Receive personalized alerts and recommendations." },
    { title: "Eat Smarter", description: "Make healthier choices for you and your family." }
  ];

  const testimonials = [
    {
      quote: "Ingreli has completely changed the way I shop for groceries. I feel confident knowing what's in my food!",
      author: "Sarah",
      role: "Mom of Two"
    },
    {
      quote: "The allergen alerts are a lifesaver for my son with peanut allergies. Highly recommend!",
      author: "John",
      role: "Fitness Enthusiast"
    },
    {
      quote: "Finally, an app that makes healthy eating simple and accessible for the whole family!",
      author: "Emily",
      role: "Vegan Blogger"
    }
  ];

  const plans = [
    {
      name: "Basic Plan",
      price: "$2",
      features: ["1 health profile", "Basic ingredient scanning and alerts"],
      cta: "Get Started"
    },
    {
      name: "Family Plan",
      price: "$5",
      features: ["Up to 5 health profiles", "Advanced features (meal planning, recipes)"],
      cta: "Most Popular",
      popular: true
    },
    {
      name: "Premium Plan",
      price: "$10",
      features: ["Unlimited health profiles", "Priority support and exclusive content"],
      cta: "Go Premium"
    }
  ];

  const faqs = [
    {
      question: "How accurate is the ingredient scanning?",
      answer: "Our OCR technology provides industry-leading accuracy in ingredient detection and analysis."
    },
    {
      question: "Can I use Ingreli for multiple family members?",
      answer: "Yes! You can create unique profiles for each family member with their specific dietary needs and preferences."
    },
    {
      question: "Is my data safe with Ingreli?",
      answer: "We use bank-level encryption to protect your data and never share your personal information with third parties."
    },
    {
      question: "What if I don't like the app? Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time with no questions asked."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-50 to-green-100 px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Scan Smarter, Eat Healthier – Know What's in Your Food!
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Ingreli helps you and your family make informed food choices by scanning ingredients and providing personalized health alerts.
              </p>
              <div className="space-x-4">
                <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                  Start Your Free Trial
                </button>
                <button className="border border-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/api/placeholder/600/400" 
                alt="Family using Ingreli app" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Ingreli?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">How Ingreli Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/4 right-0 transform translate-x-1/2">
                    <ChevronRight className="text-green-600" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400" size={20} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Affordable Plans for Every Family</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`bg-white p-8 rounded-lg shadow-lg ${plan.popular ? 'ring-2 ring-green-600' : ''}`}>
                {plan.popular && (
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-6">
                  {plan.price}<span className="text-gray-500 text-lg font-normal">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="text-green-600 mr-2" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition ${
                  plan.popular 
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'border border-gray-300 hover:bg-gray-50'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-8">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-green-600 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Take Control of Your Health?</h2>
          <p className="text-xl mb-8">Join thousands of families who trust Ingreli to make smarter food choices.</p>
          <div className="space-x-4">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Start Your Free Trial
            </button>
            <button className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
              Download Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IngreliLandingPage;