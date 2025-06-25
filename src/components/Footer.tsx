
import { Plus } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-slate-800 flex items-center justify-between">
              Paiement sécurisé
              <Plus className="h-4 w-4 md:hidden" />
            </h4>
            <div className="text-sm text-slate-600 space-y-2 hidden md:block">
              <p>Carte bancaire</p>
              <p>PayPal</p>
              <p>Virement SEPA</p>
              <p>Paiement en 3x sans frais</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-slate-800 flex items-center justify-between">
              Livraison sécurisée
              <Plus className="h-4 w-4 md:hidden" />
            </h4>
            <div className="text-sm text-slate-600 space-y-2 hidden md:block">
              <p>Emballage professionnel</p>
              <p>Assurance transport</p>
              <p>Livraison en point relais</p>
              <p>Installation sur demande</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-slate-800 flex items-center justify-between">
              Aide & Contact
              <Plus className="h-4 w-4 md:hidden" />
            </h4>
            <div className="text-sm text-slate-600 space-y-2 hidden md:block">
              <p>Service client</p>
              <p>Guide d'entretien</p>
              <p>Commandes personnalisées</p>
              <p>Garantie qualité</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-slate-800 flex items-center justify-between">
              À propos de Maison Eluxia
              <Plus className="h-4 w-4 md:hidden" />
            </h4>
            <div className="text-sm text-slate-600 space-y-2 hidden md:block">
              <p>Notre atelier</p>
              <p>Nos artisans</p>
              <p>Histoire du vitrail</p>
              <p>Développement durable</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-200 mt-12 pt-8 text-center">
          <p className="text-sm text-slate-500">
            © 2024 Maison Eluxia. Tous droits réservés. | Conditions générales | Politique de confidentialité
          </p>
        </div>
      </div>
    </footer>
  );
};
