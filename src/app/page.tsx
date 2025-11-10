"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl p-6">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <Card className="rounded-2xl shadow">
          <CardHeader>
            <CardTitle className="text-2xl">Next + shadcn + Motion</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              You’re good to go. Try the button to see a toast and a subtle
              animation.
            </p>
            <Button
              onClick={() => toast.success("Hello from Sonner!")}
              className="rounded-2xl"
            >
              Show toast
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
}
