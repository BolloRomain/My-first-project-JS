const theme = {

    init: function() {

        
        const themeSwitchBtn = document.getElementById('theme-switch');
        themeSwitchBtn.addEventListener('click', theme.handleChangeTheme);

        const themeColorBtnList = document.querySelectorAll('.theme-button');
        for (const themeColorBtn of themeColorBtnList) {
            themeColorBtn.addEventListener('click', theme.handleChangeColorTheme);
        }

        theme.initLocalTheme();
    },

    handleChangeColorTheme: function(event) {

        const clickedBtn = event.currentTarget;

        const colorThemeName = clickedBtn.id;
        document.body.classList.remove('theme-red','theme-blue','theme-green');
        theme.changeColorTheme(colorThemeName);

        if (document.body.classList.contains(colorThemeName)) {
            localStorage.setItem('colorTheme',  colorThemeName);
        }
    },

     handleChangeTheme : function () {
        const bodyElt = document.querySelector('body');
        bodyElt.classList.toggle('theme-dark');

        theme.saveToLocalStorage();
       
    },

    saveToLocalStorage: function() {

        if (document.body.classList.contains('theme-dark') === true) {
            localStorage.setItem('darkmode', 'true');
        }
        else {
            localStorage.setItem('darkmode', 'false');
        }
    },

    initLocalTheme: function() {
        const localSave = localStorage.darkmode;

        if (localSave === 'true') {
            document.body.classList.add('theme-dark');
        }
        const colorThemeLocalSave = localStorage.getItem('colorTheme');
        if (colorThemeLocalSave !== null) {
            theme.changeColorTheme(colorThemeLocalSave);
        }
    },

    changeColorTheme: function(colorTheme) {
        document.body.classList.add(colorTheme);
        const logoPath = 'img/logo-' + colorTheme + '.png';
        const logoImg = document.querySelector('.logo__image');
        logoImg.src = logoPath;
    }

};

document.addEventListener('DOMContentLoaded', theme.init);