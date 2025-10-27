import React, { useEffect } from 'react';

// FIX: Define a dedicated interface for the custom element's attributes
// to ensure proper type resolution by TypeScript. This avoids a complex
// intersection type that can sometimes cause issues with module augmentation.
interface PayPalCartButtonHTMLAttributes extends React.HTMLAttributes<HTMLElement> {
  'data-id'?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // FIX: Correctly type the custom element by directly using the attributes interface.
      // This is the standard way to declare custom elements for JSX in TypeScript.
      // The original type definition was incomplete. It needs to be wrapped in React.DetailedHTMLProps
      // to include standard React properties like `key` and `ref`, which allows TypeScript to correctly recognize it.
      'paypal-cart-button': React.DetailedHTMLProps<PayPalCartButtonHTMLAttributes, HTMLElement>;
    }
  }
  interface Window {
    cartPaypal?: {
      Cart: (options: { id: string }) => void;
    };
  }
}

const PayPalCartButton: React.FC = () => {
  useEffect(() => {
    // The script from index.html adds `cartPaypal` to the window object.
    // We check if it exists before trying to initialize the cart button.
    if (window.cartPaypal && typeof window.cartPaypal.Cart === 'function') {
      try {
        window.cartPaypal.Cart({ id: "pp-view-cart" });
      } catch (error) {
        console.error("PayPal Cart initialization error:", error);
      }
    }
  }, []);

  // This is a custom element provided by the PayPal script
  return <paypal-cart-button data-id="pp-view-cart"></paypal-cart-button>;
};

export default PayPalCartButton;
