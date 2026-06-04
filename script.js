*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    scroll-behavior:smooth;
}

body{
    background:#FFF9FD;
    font-family:"LXGW WenKai", serif;
    color:#555;
    line-height:1.6;
}

/* ===== Header ===== */
header{
    text-align:center;
    padding:50px 20px 40px;
    background:linear-gradient(135deg,#FFD6E8,#FFE9F3);
    margin-bottom:40px;
    border-bottom:1px solid rgba(255,95,162,.15);
}

.logo{
    font-size:42px;
    font-weight:700;
    color:#ff5fa2;
    letter-spacing:2px;
}

.subtitle{
    margin-top:10px;
    font-size:20px;
}

.motto{
    margin-top:10px;
    color:#666;
}

/* ===== Navigation ===== */
nav{
    margin-top:30px;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:12px;
}

nav a{
    text-decoration:none;
    padding:10px 20px;
    background:white;
    border-radius:999px;
    color:#ff5fa2;
    transition:0.25s ease;
    border:1px solid transparent;
}

nav a:hover{
    transform:translateY(-3px);
    border-color:#ffb6d2;
    box-shadow:0 5px 15px rgba(255,95,162,.15);
}

/* ===== Section ===== */
section{
    padding:50px 8%;
}

h2{
    margin-bottom:30px;
    color:#ff5fa2;
}

/* ===== Card（默认：静态） ===== */
.card{
    background:white;
    padding:35px;
    border-radius:25px;
    box-shadow:0 8px 25px rgba(0,0,0,.08);
    max-width:1000px;
    margin:auto;
    transition:none;   /* ✔ 静态卡不会动 */
}

/* ===== 动画卡（国家 + 角色） ===== */
.card-animated{
    transition:0.3s ease;
}

.card-animated:hover{
    transform:translateY(-8px);
}

/* ===== Grid ===== */
.character-grid,
.gallery-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:25px;
}

/* ===== 角色卡 ===== */
.character-card{
    background:white;
    border-radius:25px;
    text-align:center;
    box-shadow:0 8px 25px rgba(0,0,0,.08);
    overflow:hidden;
}

/* ✔ 只有动画卡才有 hover */
.card-animated.character-card{
    transition:0.3s ease;
}

.card-animated.character-card:hover{
    transform:translateY(-8px);
}

/* 图片动画 */
.image-wrapper{
    width:100%;
    height:280px;
    overflow:hidden;
}

.image-wrapper img{
    width:100%;
    height:100%;
    object-fit:cover;
    transition:0.3s ease;
}

.card-animated.character-card:hover img{
    transform:scale(1.05);
}

.character-card h3{
    margin:15px 0;
}

/* ===== Gallery ===== */
.gallery-grid img{
    width:100%;
    border-radius:20px;
    transition:0.3s ease;
}

.gallery-grid img:hover{
    transform:scale(1.03);
}

/* ===== Footer ===== */
footer{
    background:#FFD6E8;
    padding:40px;
    text-align:center;
    margin-top:50px;
}

/* ===== Modal ===== */
.modal{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,.5);
    display:none;
    justify-content:center;
    align-items:center;
    z-index:999;
}

.modal-card{
    background:white;
    width:90%;
    max-width:420px;
    padding:30px;
    border-radius:20px;
    text-align:center;
    animation:pop .25s ease;
}

@keyframes pop{
    from{transform:scale(0.8);opacity:0;}
    to{transform:scale(1);opacity:1;}
}

.modal-role{
    color:#ff5fa2;
    margin:10px 0;
}

.modal-desc{
    color:#666;
}

.modal button{
    margin-top:20px;
    padding:10px 18px;
    border:none;
    border-radius:999px;
    background:#ff5fa2;
    color:white;
    cursor:pointer;
}

/* ===== Responsive ===== */
@media (max-width:768px){

.logo{font-size:32px;}

.hero h1{font-size:2.2rem;}

nav{gap:10px;}

nav a{
    font-size:14px;
    padding:10px 16px;
}
}