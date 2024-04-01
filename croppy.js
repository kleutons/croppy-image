class CroppyImage {
    constructor(id) {
        this.imgCroppy = document.getElementById(id);
        this.imgCroppyURL = this.imgCroppy.src;
    }

    checkImageLoaded() {
        return new Promise((resolve, reject) => {
            let img = new Image();
            img.onload = () => {
                resolve(true); // Imagem carregada com sucesso
            };
            img.onerror = () => {
                resolve(false); // Erro ao carregar imagem
            };
            img.src = this.imgCroppyURL;
        });
    }

    async init() {
        console.log('OnInit');
        const imageLoaded = await this.checkImageLoaded();
        console.log('Imagem carregada:', imageLoaded);
        this.imgCroppy.style.display = 'none';
    }

    destroy() {
        console.log('Destroy');
    }
}

const croppy = new CroppyImage('crop-1');
croppy.init();
