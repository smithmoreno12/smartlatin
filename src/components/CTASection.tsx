

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast"; // 👈 tu hook de toast

const CTASection = () => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();            // ← obtenemos la función toast

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    /* 🔔 mostr­amos el toast */
    toast({
      title: "¡Formulario enviado!",
      description: "Nos pondremos en contacto en menos de 24 h.",
    });

    setOpen(false); // cerrar modal
  };

  return (
    <>
      {/* Sección CTA */}
      <section className="w-full py-20 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para elevar su presencia digital?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Haz realidad tu visión con SmartLatin Technologies. ¡Colabora con nuestros
            expertos y crea tu próximo proyecto exitoso hoy mismo!
          </p>

          <Button
            className="bg-white text-black px-8 py-3 text-lg font-semibold hover:bg-gray-100 transition-colors"
            size="lg"
            onClick={() => setOpen(true)}
          >
            Vamos a contactarnos
          </Button>
        </div>
      </section>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Contáctanos</DialogTitle>
            <DialogDescription>
              Completa el formulario y te responderemos en menos de 24&nbsp;h.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input type="text" placeholder="Nombre completo" required />
            <Input type="email" placeholder="Correo electrónico" required />
            <Textarea rows={4} placeholder="Cuéntanos tu proyecto..." required />

            <div className="flex justify-end gap-2 pt-2">
              <DialogClose asChild>
                <Button variant="secondary">Cancelar</Button>
              </DialogClose>
              <Button type="submit">Enviar</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CTASection;
