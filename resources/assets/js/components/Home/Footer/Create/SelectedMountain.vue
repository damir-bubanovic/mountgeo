<template>
    <el-row :gutter="24">
        <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18" :offset="4" class="el-selected-mountain">
            <el-select v-model="mountain"
            @change="selectedMountain"
            placeholder="Select Mountain to Add New...">
                <el-option
                    v-for="mountain in mountains.list"
                    :key="mountain.id + mountain.name"
                    :label="mountain.name"
                    :value="mountain.id + mountain.name">
                </el-option>
            </el-select>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        data() {
            return {
                mountain: ''
            }
        },
        mounted() {
            return this.$store.dispatch('GET_MOUNTAINS');
        },
        computed: {
            mountains() {
                return {
                    list: this.$store.state.mountain.mountains
                }
            },
            clear() {
                return this.$store.state.clear.clearInformation;
            }
        },
        watch: {
            /**
             * Clear selected values
             * > in computed (state) property
             * > reload clear event to be used again
             */
            clear() {
                this.mountain = '';
                this.$store.dispatch('CLEAR_SELECT_VALUES_INFORMATION');
            }
        },
        methods: {
            selectedMountain() {
                var data = {
                    mountain_id: this.mountain.replace(/[^0-9\.]+/g, ''),
                    mountain_name: this.mountain.replace(/[0-9]/g, ''),
                };
                this.$store.dispatch('SELECTED_MOUNTAIN', data)
                    .then(() => {
                        this.$store.dispatch('GET_ROUTES', data);
                    })
                    .then(() => {
                        this.$store.dispatch('GET_STORIES', data);
                    })
                    .then(() => {
                        this.$store.dispatch('GET_REFUGES', data);
                    });
            }
        }
    }
</script>