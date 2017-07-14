<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>vue-modal-component</title>

        <link rel="stylesheet" href="/demo/style.css">
    </head>
    <body>
        <div id="app">
            <h1>vue-modal-component</h1>

            <p>Take a look at the source code on <a href="https://github.com/benjamincrozat/vue-modal-component">GitHub</a>.</p>

            <h2>Modal</h2>

            <p>Basic use of Modal.vue.</p>

            <div class="toggle-btns">
                <button type="button"
                        class="toggle-btn"
                        @click="$refs.modal.setVisible(true)"
                >
                    Modal
                </button>
            </div>

            <h2>Alert</h2>

            <p>A modal with a "OK" button.</p>

            <div class="toggle-btns">
                <button type="button"
                        class="toggle-btn"
                        @click="$refs.alert.setVisible(true)"
                >
                    Alert
                </button>

                <button type="button"
                        class="toggle-btn"
                        @click="$refs.alertWithOverflow.setVisible(true)"
                >
                    Alert with lot of content
                </button>
            </div>

            <h2>Confirmation</h2>

            <p>A modal with "Cancel" and "Confirm" buttons.</p>

            <div class="toggle-btns">
                <button type="button"
                        class="toggle-btn"
                        @click="$refs.confirm.setVisible(true)"
                >
                    Confirmation
                </button>

                <button type="button"
                        class="toggle-btn"
                        @click="$refs.destructiveConfirm.setVisible(true)"
                >
                    Destructive Confirmation
                </button>
            </div>

            <h2>Prompt</h2>

            <p>Just like a confirm modal, but with an input.</p>

            <div class="toggle-btns">
                <button type="button"
                        class="toggle-btn"
                        @click="$refs.prompt.setVisible(true)"
                >
                    Prompt
                </button>
            </div>

            <modal title-text="Modal"
                   ref="modal"
            >
                <p>This is a simple modal with just a close button.</p>
            </modal>

            <alert title-text="Alert"
                   ref="alert"
            >
                <p>This is a modal with an "OK" button.</p>
            </alert>

            <alert title-text="Alert with lot of content"
                   ref="alertWithOverflow"
            >
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, et. Pariatur, illum, reprehenderit. Perferendis odit exercitationem quia omnis, quasi in ipsa aspernatur sequi cum veniam. Officia culpa maiores excepturi sapiente, distinctio odit, id laudantium reprehenderit itaque sed neque, hic dolorem tempore ullam consequatur corporis earum! Adipisci aut pariatur asperiores, magnam quam tempore, provident perspiciatis vitae.</p>

                <p>Voluptate itaque labore dignissimos molestias natus nisi cum ducimus. Iste vero possimus voluptatem maxime totam odit officiis sint atque voluptates cum esse fugit deleniti quae quia dolor ex quaerat, nihil sapiente tempora animi laborum quod, ut autem? Officiis nesciunt ipsa veniam necessitatibus architecto nihil quae, ut quam quis sunt placeat accusantium, eligendi aperiam eveniet repellendus, fugiat hic temporibus blanditiis laboriosam itaque deserunt, fuga eaque. Porro consequuntur ducimus natus, non necessitatibus at dolor eveniet, saepe magnam deserunt dolore ipsa eum, fuga delectus eos suscipit dolorum accusantium quibusdam veritatis officiis. Facere pariatur doloribus magnam. Dolorum quam ullam similique quia recusandae ipsa nihil excepturi est dolore, ipsum vel minima cum, commodi eaque laudantium, neque incidunt facere perspiciatis beatae?</p>

                <p>Nobis quos, ullam mollitia nam veritatis neque dolor dolorum temporibus, ipsam doloribus quam, natus dolores recusandae explicabo rerum accusantium minima corporis libero labore reiciendis commodi ipsa doloremque itaque. Sint, officia!</p>
            </alert>

            <confirm title-text="Confirm"
                     ref="confirm"
            >
                <p>This is a confirmation type modal.</p>
            </confirm>

            <confirm :destructive="true"
                     title-text="Destructive Confirmation"
                     ref="destructiveConfirm"
            >
                <p>This is a destructive confirmation type modal.</p>
            </confirm>

            <prompt title-text="Prompt"
                    @confirm="showPromptInput"
                    ref="prompt"
            >
                <p>This is a prompt type modal.</p>
            </prompt>
        </div>

        <?php foreach (glob('dist/static/js/manifest.*.js') as $script) : ?>
            <script src="/<?= $script; ?>"></script>
        <?php endforeach; ?>

        <?php foreach (glob('dist/static/js/vendor.*.js') as $script) : ?>
            <script src="/<?= $script; ?>"></script>
        <?php endforeach; ?>

        <?php foreach (glob('dist/static/js/app.*.js') as $script) : ?>
            <script src="/<?= $script; ?>"></script>
        <?php endforeach; ?>
    </body>
</html>
