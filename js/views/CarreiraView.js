class CarreiraView extends View {
    template(idioma) {
        return `<h1>Carreira</h1>
        <div class="conteudo-carreira">
            <nav class="circular-menu">
                <div class="circle">
                    <a onclick="carreiraController.abrirLocal('cti')" class="fa fa-school"></a>
                    <a onclick="carreiraController.abrirLocal('mstech')" class="fa fa-campground"></a>
                    <a onclick="carreiraController.abrirLocal('trinty')" class="fa fa-fort-awesome"></a>
                    <a onclick="carreiraController.abrirLocal('unesp')" class="fa fa-university"></a>
                    <a onclick="carreiraController.abrirLocal('paschoalotto')" class="fa fa-place-of-worship"></a>
                    <a onclick="carreiraController.abrirLocal('db1')" class="fa fa-archway"></a>
                    <a onclick="carreiraController.abrirLocal('unipartner')" class="fa fa-chess-rook"></a>
                </div>
                <p class="legenda-menu">Ordem dos ícones: sentido horário</p>
                <a href="" class="menu-button" onclick="carreiraController.toogleMenuBussola(event)"><i class="far fa-compass"></i></a>
            </nav>
            <div class="mapa" style="background-image: url(img/cti.jpg);">
                <div class="bg-opaco">
                    <h2>Colégio Técnico Industrial (CTI) - Unesp</h2>
                    <h3>
                        <i class="far fa-calendar-check"></i> 2007 - 2010
                        <i class="fas fa-map-marker-alt"></i> São Paulo, Brasil
                        <i class="fas fa-graduation-cap"></i> Técnico em Informática
                    </h3>
                    <p>Cupcake ipsum dolor sit amet. Ice cream carrot cake dragée marzipan lollipop bonbon toffee.
                        Carrot cake dessert I love donut I love. I love cake cake I love sesame snaps I love brownie
                        pie. Icing I love cake. Dessert cake pudding croissant bonbon ice cream. Toffee cookie
                        jelly-o I love cake I love. Fruitcake dessert caramels cupcake chupa chups lemon drops I
                        love. Oat cake topping marzipan.</p>
                    <p>Cheesecake gummies tart cupcake sugar plum powder chocolate bar liquorice. Bonbon carrot cake
                        lollipop jujubes soufflé chocolate bar gummies tootsie roll toffee. Dessert apple pie sugar
                        plum cake gingerbread pie pastry. Carrot cake tootsie roll I love gummi bears apple pie
                        halvah apple pie pie. Topping topping gingerbread donut I love. I love oat cake jujubes
                        pudding jujubes. Oat cake toffee jelly powder cake jelly beans. Tart danish halvah. Bonbon
                        gingerbread jelly lollipop icing. Sweet roll gingerbread jelly muffin icing I love jelly
                        beans ice cream.</p>
                    <p>Oat cake pudding muffin cotton candy marshmallow chupa chups soufflé. Gummi bears wafer
                        pastry chocolate I love gummi bears. Lollipop toffee powder powder I love carrot cake cake.
                        Chocolate bonbon I love wafer. Sweet roll gummi bears gummies. Topping lemon drops cotton
                        candy chocolate bar powder I love tart sweet.</p>
                </div>
            </div>
        </div>`;
    }
}