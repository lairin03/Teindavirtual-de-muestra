const products = [
    { id: 1, name: 'Chaqueta Aurora', category: 'mujer', price: 129.99, image: 'https://images.unsplash.com/photo-1520974735194-1d0fcb414e41?auto=format&fit=crop&w=700&q=80', description: 'Chaqueta acolchada con diseño moderno, ideal para crear un look urbano con estilo premium.', rating: 4.8, reviews: 145, sizes: ['S', 'M', 'L', 'XL'], colors: ['Negro', 'Beige', 'Rosa'], discount: '10% OFF', type: 'Abrigo' },
    { id: 2, name: 'Sudadera Neo', category: 'hombre', price: 69.95, image: 'https://images.unsplash.com/photo-1495121605193-b116b5b9c5d6?auto=format&fit=crop&w=700&q=80', description: 'Sudadera con capucha de algodón suave y detalles minimalistas, perfecta para cualquier outfit diario.', rating: 4.6, reviews: 98, sizes: ['M', 'L', 'XL'], colors: ['Gris', 'Negro', 'Azul'], discount: '15% OFF', type: 'Sudadera' },
    { id: 3, name: 'Jeans Cielo', category: 'mujer', price: 84.50, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=700&q=80', description: 'Jeans de corte alto con acabado suave y moderno, pensados para resaltar cualquier figura.', rating: 4.9, reviews: 210, sizes: ['XS', 'S', 'M', 'L'], colors: ['Denim', 'Blanco'], discount: '20% OFF', type: 'Pantalón' },
    { id: 4, name: 'Camiseta Lunar', category: 'hombre', price: 39.90, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=700&q=80', description: 'Camiseta esencial de algodón orgánico con estampado sutil y corte relajado.', rating: 4.7, reviews: 76, sizes: ['S', 'M', 'L', 'XL'], colors: ['Blanco', 'Negro', 'Verde'], discount: '5% OFF', type: 'Camiseta' },
    { id: 5, name: 'Bolso Eclipse', category: 'accesorios', price: 89.99, image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=700&q=80', description: 'Bolso de mano con textura satinada, ideal para complementar looks de noche y eventos especiales.', rating: 4.8, reviews: 125, sizes: ['Única'], colors: ['Negro', 'Oro'], discount: '12% OFF', type: 'Bolso' },
    { id: 6, name: 'Gafas Prisma', category: 'accesorios', price: 59.00, image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80', description: 'Gafas modernas con marco ligero y lentes polarizadas, un accesorio imprescindible.', rating: 4.5, reviews: 92, sizes: ['Única'], colors: ['Transparente', 'Marrón'], discount: '10% OFF', type: 'Accesorio' },
    { id: 7, name: 'Vestido Solara', category: 'mujer', price: 112.00, image: 'https://images.unsplash.com/photo-1495121605193-b116b5b9c5d6?auto=format&fit=crop&w=700&q=80', description: 'Vestido largo con caída fluida, perfecto para eventos de noche y escapes urbanos.', rating: 4.8, reviews: 181, sizes: ['S', 'M', 'L'], colors: ['Rojo', 'Negro', 'Blanco'], discount: '20% OFF', type: 'Vestido' },
    { id: 8, name: 'Blusa Selene', category: 'mujer', price: 58.90, image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=700&q=80', description: 'Blusa ligera con mangas abullonadas y estampado sofisticado.', rating: 4.7, reviews: 134, sizes: ['S', 'M', 'L'], colors: ['Crema', 'Azul', 'Rosa'], discount: '15% OFF', type: 'Blusa' },
    { id: 9, name: 'Pantalón Atlas', category: 'hombre', price: 95.00, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=700&q=80', description: 'Pantalón chino con corte slim y tejido resistente, ideal para looks casuales y formales.', rating: 4.6, reviews: 112, sizes: ['M', 'L', 'XL'], colors: ['Beige', 'Gris', 'Azul'], discount: '10% OFF', type: 'Pantalón' },
    { id: 10, name: 'Abrigo Nova', category: 'mujer', price: 159.99, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80', description: 'Abrigo con forro térmico y capucha desmontable para un uso muy versátil.', rating: 4.9, reviews: 215, sizes: ['S', 'M', 'L', 'XL'], colors: ['Negro', 'Caqui'], discount: '25% OFF', type: 'Abrigo' },
    { id: 11, name: 'Chaqueta Axis', category: 'hombre', price: 119.95, image: 'https://images.unsplash.com/photo-1495121605193-b116b5b9c5d6?auto=format&fit=crop&w=700&q=80', description: 'Chaqueta bomber con interior suave, ideal para combinar con denim o joggers.', rating: 4.7, reviews: 137, sizes: ['M', 'L', 'XL'], colors: ['Negro', 'Verde', 'Gris'], discount: '18% OFF', type: 'Chaqueta' },
    { id: 12, name: 'Top Velvet', category: 'mujer', price: 44.50, image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=700&q=80', description: 'Top con textura suave y acabado elegante, perfecto para combinaciones de noche.', rating: 4.6, reviews: 89, sizes: ['XS', 'S', 'M', 'L'], colors: ['Burdeo', 'Negro'], discount: '12% OFF', type: 'Top' },
    { id: 13, name: 'Pantalones Asher', category: 'hombre', price: 79.90, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=700&q=80', description: 'Pantalón de mezclilla stretch con un corte moderno y cómodo.', rating: 4.7, reviews: 101, sizes: ['M', 'L', 'XL'], colors: ['Azul oscuro', 'Negro'], discount: '10% OFF', type: 'Jeans' },
    { id: 14, name: 'Falda Halo', category: 'mujer', price: 69.99, image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80', description: 'Falda midi con vuelo ligero y estampado moderno.', rating: 4.7, reviews: 95, sizes: ['S', 'M', 'L'], colors: ['Negro', 'Verde oliva'], discount: '15% OFF', type: 'Falda' },
    { id: 15, name: 'Camisa Orion', category: 'hombre', price: 54.50, image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=700&q=80', description: 'Camisa de lino transpirable para un estilo fresco y sofisticado.', rating: 4.6, reviews: 89, sizes: ['S', 'M', 'L', 'XL'], colors: ['Blanco', 'Celeste'], discount: '10% OFF', type: 'Camisa' },
    { id: 16, name: 'Suéter Ember', category: 'mujer', price: 62.90, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=700&q=80', description: 'Suéter de punto con textura suave y mangas abullonadas.', rating: 4.8, reviews: 162, sizes: ['S', 'M', 'L'], colors: ['Mostaza', 'Gris', 'Rosa'], discount: '15% OFF', type: 'Suéter' },
    { id: 17, name: 'Short Breeze', category: 'hombre', price: 48.00, image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=700&q=80', description: 'Short corto de algodón con ribete deportivo para un estilo fresco.', rating: 4.5, reviews: 74, sizes: ['M', 'L', 'XL'], colors: ['Arena', 'Azul marino'], discount: '10% OFF', type: 'Short' },
    { id: 18, name: 'Bufanda Cosmos', category: 'accesorios', price: 34.99, image: 'https://images.unsplash.com/photo-1495121605193-b116b5b9c5d6?auto=format&fit=crop&w=700&q=80', description: 'Bufanda cálida con acabado suave y diseño único.', rating: 4.8, reviews: 102, sizes: ['Única'], colors: ['Gris', 'Azul', 'Burdeos'], discount: '12% OFF', type: 'Bufanda' },
    { id: 19, name: 'Sombrero Rayo', category: 'accesorios', price: 42.00, image: 'https://images.unsplash.com/photo-1520974735194-1d0fcb414e41?auto=format&fit=crop&w=700&q=80', description: 'Sombrero con ala flexible y estilo urbano.', rating: 4.6, reviews: 68, sizes: ['Única'], colors: ['Negro', 'Marrón'], discount: '10% OFF', type: 'Sombrero' },
    { id: 20, name: 'Cinturón Zenith', category: 'accesorios', price: 29.90, image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=700&q=80', description: 'Cinturón elegante con hebilla metálica de estilo moderno.', rating: 4.4, reviews: 81, sizes: ['S/M', 'L/XL'], colors: ['Negro', 'Marrón'], discount: '10% OFF', type: 'Cinturón' },
    { id: 21, name: 'Zapatos Metro', category: 'hombre', price: 99.50, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80', description: 'Zapatos casual con suela acolchada y líneas modernas.', rating: 4.7, reviews: 128, sizes: ['40', '41', '42', '43', '44'], colors: ['Negro', 'Marrón'], discount: '12% OFF', type: 'Zapatos' },
    { id: 22, name: 'Zapatillas Quasar', category: 'mujer', price: 89.00, image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80', description: 'Zapatillas deportivas con diseño ligero y detalles reflejantes.', rating: 4.8, reviews: 153, sizes: ['36', '37', '38', '39', '40'], colors: ['Blanco', 'Rosa'], discount: '15% OFF', type: 'Zapatillas' },
    { id: 23, name: 'Mochila Lumin', category: 'accesorios', price: 74.99, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80', description: 'Mochila urbana con múltiples bolsillos y acabado resistente al agua.', rating: 4.6, reviews: 110, sizes: ['Única'], colors: ['Negro', 'Azul'], discount: '12% OFF', type: 'Mochila' },
    { id: 24, name: 'Collares Aura', category: 'accesorios', price: 39.90, image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=700&q=80', description: 'Collar con cadenas delicadas y colgante minimalista.', rating: 4.7, reviews: 93, sizes: ['Única'], colors: ['Oro', 'Plata'], discount: '10% OFF', type: 'Collar' },
    { id: 25, name: 'Anillo Stella', category: 'accesorios', price: 24.99, image: 'https://images.unsplash.com/photo-1520974735194-1d0fcb414e41?auto=format&fit=crop&w=700&q=80', description: 'Anillo ajustable con brillo sutil para cualquier ocasión.', rating: 4.7, reviews: 87, sizes: ['Única'], colors: ['Oro', 'Plata'], discount: '10% OFF', type: 'Anillo' },
    { id: 26, name: 'Reloj Eclipse', category: 'accesorios', price: 119.00, image: 'https://images.unsplash.com/photo-1495121605193-b116b5b9c5d6?auto=format&fit=crop&w=700&q=80', description: 'Reloj con correa de cuero y esfera moderna con acabado metálico.', rating: 4.8, reviews: 132, sizes: ['Única'], colors: ['Negro', 'Marrón'], discount: '15% OFF', type: 'Reloj' },
    { id: 27, name: 'Top Mirage', category: 'mujer', price: 49.95, image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=700&q=80', description: 'Top corto con tejido ligero y estampado geométrico.', rating: 4.5, reviews: 76, sizes: ['XS', 'S', 'M', 'L'], colors: ['Blanco', 'Negro'], discount: '10% OFF', type: 'Top' },
    { id: 28, name: 'Vestido Duna', category: 'mujer', price: 99.99, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80', description: 'Vestido de verano con tirantes finos y caída suave.', rating: 4.9, reviews: 202, sizes: ['S', 'M', 'L'], colors: ['Beige', 'Azul'], discount: '20% OFF', type: 'Vestido' },
    { id: 29, name: 'Camiseta Prism', category: 'hombre', price: 34.90, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=700&q=80', description: 'Camiseta básica con estampado ligero y corte cómodo.', rating: 4.5, reviews: 84, sizes: ['S', 'M', 'L', 'XL'], colors: ['Blanco', 'Gris', 'Azul'], discount: '10% OFF', type: 'Camiseta' },
    { id: 30, name: 'Camisa Polo', category: 'hombre', price: 54.99, image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=700&q=80', description: 'Polo de algodón con detalles mínimos y corte moderno.', rating: 4.6, reviews: 98, sizes: ['S', 'M', 'L', 'XL'], colors: ['Blanco', 'Azul', 'Negro'], discount: '10% OFF', type: 'Polo' },
    { id: 31, name: 'Jeans Aria', category: 'mujer', price: 92.90, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=700&q=80', description: 'Jeans de cintura alta con lavado vintage y comodidad stretch.', rating: 4.8, reviews: 161, sizes: ['XS', 'S', 'M', 'L'], colors: ['Denim', 'Negro'], discount: '15% OFF', type: 'Jeans' },
    { id: 32, name: 'Chaqueta Terra', category: 'hombre', price: 129.00, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80', description: 'Chaqueta de campo con forro interior y múltiples bolsillos.', rating: 4.7, reviews: 146, sizes: ['M', 'L', 'XL'], colors: ['Caqui', 'Navy'], discount: '10% OFF', type: 'Chaqueta' },
    { id: 33, name: 'Gorro Pixel', category: 'accesorios', price: 24.50, image: 'https://images.unsplash.com/photo-1495121605193-b116b5b9c5d6?auto=format&fit=crop&w=700&q=80', description: 'Gorro tejido con diseño urbano y estilo comfy.', rating: 4.5, reviews: 79, sizes: ['Única'], colors: ['Gris', 'Negro'], discount: '10% OFF', type: 'Gorro' },
    { id: 34, name: 'Suéter Lunar', category: 'hombre', price: 72.99, image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80', description: 'Suéter para clima frío con cuello redondo y acabado cómodo.', rating: 4.7, reviews: 115, sizes: ['M', 'L', 'XL'], colors: ['Gris', 'Crudo'], discount: '12% OFF', type: 'Suéter' },
    { id: 35, name: 'Blusa Nube', category: 'mujer', price: 54.90, image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=700&q=80', description: 'Blusa vaporosa con manga largo y escote elegante.', rating: 4.7, reviews: 101, sizes: ['S', 'M', 'L'], colors: ['Blanco', 'Celeste'], discount: '10% OFF', type: 'Blusa' },
    { id: 36, name: 'Falda Aurora', category: 'mujer', price: 64.99, image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80', description: 'Falda ligera con caída fluida y estilo femenino.', rating: 4.8, reviews: 122, sizes: ['S', 'M', 'L'], colors: ['Rosa', 'Negro'], discount: '15% OFF', type: 'Falda' },
    { id: 37, name: 'Pantalón Nero', category: 'hombre', price: 89.90, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=700&q=80', description: 'Pantalón con corte recto y tejido técnico para mayor comodidad.', rating: 4.6, reviews: 109, sizes: ['M', 'L', 'XL'], colors: ['Negro', 'Gris'], discount: '10% OFF', type: 'Pantalón' },
    { id: 38, name: 'Traje Muse', category: 'mujer', price: 139.00, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80', description: 'Conjunto blazer y pantalón para un look formal moderno.', rating: 4.9, reviews: 159, sizes: ['S', 'M', 'L'], colors: ['Negro', 'Beige'], discount: '20% OFF', type: 'Traje' },
    { id: 39, name: 'Sudadera Pulse', category: 'hombre', price: 72.50, image: 'https://images.unsplash.com/photo-1495121605193-b116b5b9c5d6?auto=format&fit=crop&w=700&q=80', description: 'Sudadera premium con acabado suave y diseño contemporáneo.', rating: 4.7, reviews: 123, sizes: ['M', 'L', 'XL'], colors: ['Negro', 'Gris'], discount: '12% OFF', type: 'Sudadera' },
    { id: 40, name: 'Abrigo Croma', category: 'mujer', price: 169.99, image: 'https://images.unsplash.com/photo-1520974735194-1d0fcb414e41?auto=format&fit=crop&w=700&q=80', description: 'Abrigo con corte oversize y detalles en contraste.', rating: 4.8, reviews: 178, sizes: ['S', 'M', 'L', 'XL'], colors: ['Beige', 'Negro'], discount: '25% OFF', type: 'Abrigo' },
    { id: 41, name: 'Vestido Flash', category: 'ofertas', price: 89.90, image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=700&q=80', description: 'Vestido corto con brillo sutil y silueta moderna.', rating: 4.8, reviews: 166, sizes: ['S', 'M', 'L'], colors: ['Negro', 'Azul'], discount: '30% OFF', type: 'Vestido' },
    { id: 42, name: 'Blazer Nova', category: 'ofertas', price: 129.50, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80', description: 'Blazer estructurado para un estilo atemporal con toques contemporáneos.', rating: 4.9, reviews: 195, sizes: ['S', 'M', 'L'], colors: ['Gris', 'Negro'], discount: '25% OFF', type: 'Blazer' },
    { id: 43, name: 'Jeans Rebelde', category: 'ofertas', price: 64.99, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=700&q=80', description: 'Jeans con lavado intenso y corte relajado para un look urbano.', rating: 4.7, reviews: 148, sizes: ['S', 'M', 'L', 'XL'], colors: ['Azul', 'Negro'], discount: '35% OFF', type: 'Jeans' },
    { id: 44, name: 'Chamarra Metro', category: 'ofertas', price: 99.99, image: 'https://images.unsplash.com/photo-1495121605193-b116b5b9c5d6?auto=format&fit=crop&w=700&q=80', description: 'Chamarra impermeable con diseño technical streetwear.', rating: 4.6, reviews: 137, sizes: ['M', 'L', 'XL'], colors: ['Negro', 'Azul'], discount: '30% OFF', type: 'Chamarra' },
    { id: 45, name: 'Bolso Luxe', category: 'ofertas', price: 79.99, image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=700&q=80', description: 'Bolso compacto con correa ajustable y acabado premium.', rating: 4.8, reviews: 142, sizes: ['Única'], colors: ['Negro', 'Marrón'], discount: '30% OFF', type: 'Bolso' },
    { id: 46, name: 'Gafas Neón', category: 'ofertas', price: 49.90, image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80', description: 'Gafas con montura llamativa y lentes degradadas.', rating: 4.6, reviews: 103, sizes: ['Única'], colors: ['Negro', 'Transparente'], discount: '25% OFF', type: 'Gafas' },
    { id: 47, name: 'Bufanda Stardust', category: 'ofertas', price: 29.90, image: 'https://images.unsplash.com/photo-1520974735194-1d0fcb414e41?auto=format&fit=crop&w=700&q=80', description: 'Bufanda suave con un estampado luminoso y textura deluxe.', rating: 4.8, reviews: 84, sizes: ['Única'], colors: ['Gris', 'Rosa'], discount: '20% OFF', type: 'Bufanda' },
    { id: 48, name: 'Sombrero Eclipse', category: 'ofertas', price: 35.00, image: 'https://images.unsplash.com/photo-1495121605193-b116b5b9c5d6?auto=format&fit=crop&w=700&q=80', description: 'Sombrero estilo fedora con un acabado sofisticado.', rating: 4.7, reviews: 66, sizes: ['Única'], colors: ['Negro', 'Camel'], discount: '30% OFF', type: 'Sombrero' },
    { id: 49, name: 'Zapatillas Drift', category: 'ofertas', price: 74.99, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80', description: 'Zapatillas deportivas con suela ancha y estilo moderno.', rating: 4.8, reviews: 130, sizes: ['36', '37', '38', '39', '40', '41', '42'], colors: ['Blanco', 'Negro'], discount: '25% OFF', type: 'Zapatillas' },
    { id: 50, name: 'Cinturón Spark', category: 'ofertas', price: 24.90, image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=700&q=80', description: 'Cinturón con hebilla luminosa y detalles metálicos.', rating: 4.5, reviews: 76, sizes: ['S/M', 'L/XL'], colors: ['Plateado', 'Negro'], discount: '20% OFF', type: 'Cinturón' }
];

let cart = [];
let currentProduct = null;
let selectedSize = '';
let selectedColor = '';

const productsGrid = document.getElementById('productsGrid');
const productsCount = document.getElementById('productsCount');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItemsContainer = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const subtotalLabel = document.getElementById('subtotal');
const shippingLabel = document.getElementById('shipping');
const totalLabel = document.getElementById('total');
const checkoutBtn = document.getElementById('checkoutBtn');
const toast = document.getElementById('toast');
const navLinks = document.querySelectorAll('.nav-link');
const searchButton = document.querySelector('.search-btn');
const btnContinue = document.querySelector('.btn-continue');
const priceFilter = document.getElementById('priceFilter');
const priceDisplay = document.getElementById('priceDisplay');
const sortSelect = document.getElementById('sortSelect');
const searchInput = document.getElementById('searchInput');
const heroBtn = document.querySelector('.btn-hero');
const productModal = document.getElementById('productModal');
const closeModal = document.getElementById('closeModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalRating = document.getElementById('modalRating');
const reviewCount = document.getElementById('reviewCount');
const modalPrice = document.getElementById('modalPrice');
const modalDiscount = document.getElementById('modalDiscount');
const modalDescription = document.getElementById('modalDescription');
const sizeOptions = document.getElementById('sizeOptions');
const colorOptions = document.getElementById('colorOptions');
const quantityInput = document.getElementById('quantityInput');
const decreaseQty = document.getElementById('decreaseQty');
const increaseQty = document.getElementById('increaseQty');
const addToCartBtn = document.getElementById('addToCartBtn');

function renderProducts(items) {
    productsCount.textContent = `${items.length} productos disponibles`;
    productsGrid.innerHTML = '';
    items.forEach(product => {
        const card = document.createElement('article');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <span class="product-category">${product.type}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <div class="product-actions">
                    <button class="btn-add" data-id="${product.id}">Agregar</button>
                    <button class="btn-details" data-id="${product.id}">Ver</button>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });
    bindProductButtons();
}

function bindProductButtons() {
    document.querySelectorAll('.btn-add').forEach(button => {
        button.addEventListener('click', () => addProductToCart(button.dataset.id));
    });
    document.querySelectorAll('.btn-details').forEach(button => {
        button.addEventListener('click', () => openProductModal(button.dataset.id));
    });
}

function addProductToCart(id, quantity = 1, options = {}) {
    const product = products.find(item => item.id === Number(id));
    const selectedOptions = {
        size: options.size || product.sizes[0],
        color: options.color || product.colors[0]
    };
    const key = `${product.id}-${selectedOptions.size}-${selectedOptions.color}`;
    const existingItem = cart.find(item => item.key === key);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            key,
            quantity,
            size: selectedOptions.size,
            color: selectedOptions.color
        });
    }
    selectedSize = '';
    selectedColor = '';
    updateCart();
    showToast(`${product.name} agregado al carrito`);
}

function openProductModal(id) {
    currentProduct = products.find(item => item.id === Number(id));
    selectedSize = currentProduct.sizes[0];
    selectedColor = currentProduct.colors[0];
    modalImage.src = currentProduct.image;
    modalTitle.textContent = currentProduct.name;
    modalRating.textContent = '★'.repeat(Math.round(currentProduct.rating));
    reviewCount.textContent = `(${currentProduct.reviews} reseñas)`;
    modalPrice.textContent = `$${currentProduct.price.toFixed(2)}`;
    modalDiscount.textContent = currentProduct.discount;
    modalDescription.textContent = currentProduct.description;
    quantityInput.value = 1;
    renderOptions(sizeOptions, currentProduct.sizes, selectedSize, 'size');
    renderOptions(colorOptions, currentProduct.colors, selectedColor, 'color');
    productModal.classList.add('open');
}

function renderOptions(container, options, selectedValue, type) {
    container.innerHTML = '';
    options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.className = option === selectedValue ? 'selected' : '';
        button.addEventListener('click', () => {
            if (type === 'size') selectedSize = option;
            if (type === 'color') selectedColor = option;
            renderOptions(container, options, option, type);
        });
        container.appendChild(button);
    });
}

function updateCart() {
    cartItemsContainer.innerHTML = '';
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="color: #bfc7e4;">Tu carrito está vacío. Agrega looks increíbles.</p>';
    }
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <div class="item-meta"><span>${item.size} · ${item.color}</span><span>$${(item.price * item.quantity).toFixed(2)}</span></div>
                <div class="cart-item-actions">
                    <button class="qty-btn" data-action="decrease" data-key="${item.key}">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" data-action="increase" data-key="${item.key}">+</button>
                    <button class="remove-btn" data-key="${item.key}">✕</button>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
    document.querySelectorAll('.qty-btn').forEach(button => {
        button.addEventListener('click', () => adjustQuantity(button.dataset.key, button.dataset.action));
    });
    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', () => removeFromCart(button.dataset.key));
    });
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    const shipping = subtotal > 0 ? 5.99 : 0;
    subtotalLabel.textContent = `$${subtotal.toFixed(2)}`;
    shippingLabel.textContent = `$${shipping.toFixed(2)}`;
    totalLabel.textContent = `$${(subtotal + shipping).toFixed(2)}`;
}

function adjustQuantity(key, action) {
    const productIndex = cart.findIndex(item => item.key === key);
    if (productIndex < 0) return;
    if (action === 'increase') {
        cart[productIndex].quantity += 1;
    } else if (action === 'decrease' && cart[productIndex].quantity > 1) {
        cart[productIndex].quantity -= 1;
    }
    updateCart();
}

function removeFromCart(key) {
    cart = cart.filter(item => item.key !== key);
    updateCart();
    showToast('Producto eliminado del carrito');
}

function toggleCart(open) {
    cartSidebar.classList.toggle('open', open);
    cartOverlay.classList.toggle('active', open);
}


function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(window.toastTimeout);
    window.toastTimeout = setTimeout(() => toast.classList.remove('show'), 2500);
}

function applyFilters() {
    const searchTerm = searchInput.value.toLowerCase();
    const maxPrice = Number(priceFilter.value);
    let filtered = products.filter(product => {
        const matchSearch = product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm);
        return matchSearch && product.price <= maxPrice;
    });
    const selectedCategory = document.querySelector('.nav-link.active')?.dataset.category || 'todos';
    if (selectedCategory !== 'todos') {
        filtered = filtered.filter(product => product.category === selectedCategory);
    }
    if (sortSelect.value === 'precio-bajo') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortSelect.value === 'precio-alto') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortSelect.value === 'nuevo') {
        filtered.sort((a, b) => b.id - a.id);
    } else if (sortSelect.value === 'populares') {
        filtered.sort((a, b) => b.reviews - a.reviews);
    }
    renderProducts(filtered);
}

function initInteractions() {
    cartBtn.addEventListener('click', () => toggleCart(true));
    closeCart.addEventListener('click', () => toggleCart(false));
    cartOverlay.addEventListener('click', () => toggleCart(false));
    btnContinue.addEventListener('click', () => toggleCart(false));
    searchButton.addEventListener('click', applyFilters);
    heroBtn.addEventListener('click', () => window.scrollTo({ top: document.querySelector('.products-section').offsetTop - 80, behavior: 'smooth' }));

    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            navLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
            applyFilters();
        });
    });

    priceFilter.addEventListener('input', () => {
        priceDisplay.textContent = `$0 - $${priceFilter.value}`;
        applyFilters();
    });

    sortSelect.addEventListener('change', applyFilters);
    searchInput.addEventListener('input', applyFilters);

    closeModal.addEventListener('click', () => productModal.classList.remove('open'));
    productModal.addEventListener('click', event => {
        if (event.target === productModal) productModal.classList.remove('open');
    });

    decreaseQty.addEventListener('click', () => {
        if (Number(quantityInput.value) > 1) {
            quantityInput.value = Number(quantityInput.value) - 1;
        }
    });
    increaseQty.addEventListener('click', () => {
        quantityInput.value = Number(quantityInput.value) + 1;
    });

    quantityInput.addEventListener('change', () => {
        if (Number(quantityInput.value) < 1) quantityInput.value = 1;
    });

    addToCartBtn.addEventListener('click', () => {
        const quantity = Number(quantityInput.value);
        addProductToCart(currentProduct.id, quantity, { size: selectedSize, color: selectedColor });
        productModal.classList.remove('open');
    });

    checkoutBtn.addEventListener('click', openCheckoutForm);
}

function openCheckoutForm() {
    if (cart.length === 0) {
        showToast('Tu carrito está vacío. Agrega productos antes de pagar.');
        return;
    }
    const existingModal = document.getElementById('paymentModal');
    if (existingModal) {
        existingModal.remove();
    }

    const paymentHtml = `
        <div class="checkout-modal-overlay"></div>
        <div class="checkout-modal">
            <div class="checkout-header">
                <h2>Pago Seguro</h2>
                <button id="closeCheckout" class="close-cart"><i class="fas fa-times"></i></button>
            </div>
            <div class="checkout-body">
                <div class="checkout-details">
                    <div class="summary-header">
                        <h3>Resumen del pedido</h3>
                        <p class="summary-note">Verifica cantidad, talla y color antes de realizar el pago.</p>
                    </div>
                    ${cart.map(item => `
                        <div class="checkout-item">
                            <div class="checkout-item-info">
                                <span class="checkout-item-name">${item.name} x${item.quantity}</span>
                                <span class="checkout-item-meta">${item.size} · ${item.color}</span>
                            </div>
                            <span>$${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    `).join('')}
                    <div class="checkout-summary-row">
                        <span>Subtotal</span>
                        <span>${subtotalLabel.textContent}</span>
                    </div>
                    <div class="checkout-summary-row">
                        <span>Envío</span>
                        <span>${shippingLabel.textContent}</span>
                    </div>
                    <div class="checkout-summary-row total-row">
                        <strong>Total</strong>
                        <strong>${totalLabel.textContent}</strong>
                    </div>
                </div>
                <form id="checkoutForm" class="checkout-form">
                    <label>Nombre completo</label>
                    <input type="text" placeholder="Tu nombre" required>
                    <label>Correo electrónico</label>
                    <input type="email" placeholder="correo@ejemplo.com" required>
                    <label>Tarjeta de crédito</label>
                    <input type="text" placeholder="0000 0000 0000 0000" required maxlength="19">
                    <div class="form-row">
                        <div>
                            <label>Expiración</label>
                            <input type="text" placeholder="MM/AA" required maxlength="5">
                        </div>
                        <div>
                            <label>CVC</label>
                            <input type="text" placeholder="123" required maxlength="3">
                        </div>
                    </div>
                    <button type="submit" class="btn-checkout">Pagar ahora</button>
                </form>
            </div>
        </div>
    `;
    const checkoutContainer = document.createElement('div');
    checkoutContainer.id = 'paymentModal';
    checkoutContainer.innerHTML = paymentHtml;
    document.body.appendChild(checkoutContainer);

    const closeCheckout = document.getElementById('closeCheckout');
    const checkoutForm = document.getElementById('checkoutForm');
    const checkoutModalOverlay = document.querySelector('.checkout-modal-overlay');

    const closeModal = () => {
        checkoutContainer.remove();
        document.body.classList.remove('modal-open');
        document.documentElement.classList.remove('modal-open');
    };

    closeCheckout.addEventListener('click', closeModal);
    checkoutModalOverlay.addEventListener('click', closeModal);
    checkoutForm.addEventListener('submit', event => {
        event.preventDefault();
        showToast('Pago procesado con éxito. Gracias por tu compra.');
        cart = [];
        updateCart();
        closeModal();
        toggleCart(false);
    });
    document.body.classList.add('modal-open');
    document.documentElement.classList.add('modal-open');
}

renderProducts(products);
initInteractions();
updateCart();
