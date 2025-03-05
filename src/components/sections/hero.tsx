import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            KHANDLA PARTH
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Experienced Frontend Developer with 3+ years of expertise in building modern,
            dynamic web applications
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="/ParthK-(frontend-developer)-1.pdf"
              download="ParthK-(frontend-developer)-1.pdf"
            >
              <Button size="lg" className="gap-2">
                <FiDownload className="w-5 h-5" />
                Download Resume
              </Button>
            </a>          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}