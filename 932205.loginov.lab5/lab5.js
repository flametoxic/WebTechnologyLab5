const ModalWindow = {
    init() {
        document.body.addEventListener("click", e => {
                if (e.target.classList.contains("customoverlay")) {
					document.body.removeChild(e.target);
            }
        });
    },

    getHtmlTemplate(modalOptions) {
        return `
			<div class="customoverlay">
				<div class="customwindow"> 
					<div class="customtitlebar">${m.title}</div>
					<div class="customcontent"><div>${m.content1}</div><div>${m.content2}</div></div>
				</div>
			</div>
        `;
    },

    openModal(modalOptions = {}) {
        m = Object.assign({
            title: 'title',
            content1: 'content1',
			content2: 'content2'
        }, modalOptions);

        const modalTemplate = this.getHtmlTemplate(m);
        document.body.insertAdjacentHTML("afterbegin", modalTemplate);
    },
};

document.addEventListener("DOMContentLoaded", () => ModalWindow.init());