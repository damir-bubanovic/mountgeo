<template>
    <div>
        <tinymce id="create-route" v-model="form.detail" :content='content' :options='options'></tinymce>
        <el-row :gutter="20">
            <el-col :span="15">
                <el-button type="primary" v-on:click="step">Add Detail</el-button>
            </el-col>
            <el-col :span="9">
                <el-button type="danger" v-on:click="cancel">Cancel</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    detail: ''
                },
                content: '',
                options: {
                    plugins: "textcolor colorpicker lists",
                    toolbar: [
                        'undo redo | formatselect | bold italic underline strikethrough | numlist bullist',
                        'indent outdent | alignleft aligncenter alignright alignnone | cut copy paste | forecolor backcolor',
                    ],
                    branding: false,
                    elementpath: false,
                    menubar: false,
                    height : 300,
                }
            }
        },
        methods: {
            cancel() {
                this.$emit('cancel');
            },
            step() {
                /**
                 * Send objects with array
                 */
                this.$validator.validateAll()
                    .then((result) => {
                        if(result) {
                            this.$emit('step', this.form);
                        }
                    });
            }
        }
    }
</script>