import { Handlers, PageProps } from "$fresh/server.ts";

export default function Home() {
  return (
    <div class="min-h-screen bg-white text-black">
      <section class="bg-gradient-to-r from-red-600 to-orange-500 text-white p-12 text-center">
        <h1 class="text-5xl font-extrabold mb-4">Louis Paturzo Fitness</h1>
        <p class="text-xl font-semibold mb-6">Never give up.</p>
        <a href="#contact" class="bg-white text-red-600 px-6 py-3 rounded-lg font-bold">Get in Touch</a>
      </section>

      <section class="p-8 bg-gray-100">
        <h2 class="text-3xl font-bold mb-4 text-center">About Louis</h2>
        <p class="max-w-3xl mx-auto text-lg text-center">
          With a focus on individualized personal training, Louis Paturzo helps clients reach their fitness goals through personalized plans, motivational coaching, and expert guidance.
        </p>
      </section>

      <section class="p-8 bg-white">
        <h2 class="text-3xl font-bold mb-6 text-center">Services</h2>
        <div class="grid gap-6 md:grid-cols-3">
          <div class="p-6 bg-gray-100 rounded-xl shadow-md">
            <h3 class="text-xl font-semibold mb-2">One-on-One Training</h3>
            <p>Custom fitness programs tailored to your goals and fitness level.</p>
          </div>
          <div class="p-6 bg-gray-100 rounded-xl shadow-md">
            <h3 class="text-xl font-semibold mb-2">Virtual Coaching</h3>
            <p>Train with Louis from anywhere with live, online sessions.</p>
          </div>
          <div class="p-6 bg-gray-100 rounded-xl shadow-md">
            <h3 class="text-xl font-semibold mb-2">Nutrition Guidance</h3>
            <p>Get advice on fueling your body for peak performance.</p>
          </div>
        </div>
      </section>

      <section id="contact" class="p-8 bg-gray-100">
        <h2 class="text-3xl font-bold mb-6 text-center">Contact Louis</h2>
        <form class="max-w-xl mx-auto grid gap-4">
          <input type="text" placeholder="Your Name" class="p-3 rounded border" required />
          <input type="email" placeholder="Your Email" class="p-3 rounded border" required />
          <textarea placeholder="Your Message" rows={5} class="p-3 rounded border" required></textarea>
          <button type="submit" class="bg-red-600 text-white p-3 rounded font-bold">Send Message</button>
        </form>
      </section>

      <footer class="text-center text-sm text-white bg-black p-4">
        © {new Date().getFullYear()} Louis Paturzo Fitness. All rights reserved.
      </footer>
    </div>
  );
}
