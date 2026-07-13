const products = [
    { id: 1, name: "Organic Cotton Romper", price: "₦45,000", image: "https://picsum.photos/id/1015/600/400", desc: "Soft luxury romper" },
    { id: 2, name: "Silk Party Dress", price: "₦85,000", image: "https://picsum.photos/id/1027/600/400", desc: "Elegant silk dress" },
    { id: 3, name: "Cashmere Cardigan", price: "₦65,000", image: "https://picsum.photos/id/106/600/400", desc: "Premium warm cardigan" },
    { id: 4, name: "Linen Playsuit", price: "₦52,000", image: "https://picsum.photos/id/133/600/400", desc: "Summer essential" }
];

function renderProducts() {
    const container = document.getElementById('products');
    container.innerHTML = products.map(p => `
        <div class="product-card">
            <img src="${p.image}" alt="${p.name}">
            <div style="padding:1.5rem">
                <h3>${p.name}</h3>
                <p>${p.desc}</p>
                <div style="color:#D4AF37;font-size:1.4rem;font-weight:600;margin:10px 0">${p.price}</div>
                <button onclick="orderProduct(${p.id})" style="width:100%;background:#25D366;color:white;border:none;padding:12px;border-radius:8px;cursor:pointer">Order on WhatsApp</button>
            </div>
        </div>
    `).join('');
}

function orderProduct(id) {
    const product = products.find(p => p.id === id);
    const msg = `Hi! Interested in ${product.name} - ${product.price}. Please confirm.`;
    window.open(`https://wa.me/message/GFX7D73TFEO3C1?text=${encodeURIComponent(msg)}`, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});
