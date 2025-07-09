import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-8 px-6 border-t border-green-500/20 bg-slate-900"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-green-500 font-mono mb-4 md:mb-0">
            &gt; het_patel.exe --version 2024
          </div>
          <div className="text-gray-400 text-sm">
            Built with security and performance in mind • © 2024 Het Patel
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
