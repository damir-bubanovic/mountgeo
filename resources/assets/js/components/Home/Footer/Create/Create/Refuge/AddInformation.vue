<template>
    <div>
        <span class="demonstration">Enter Refuge Info</span>
        <el-row>
            <el-col :span="12">
                <el-time-select
                    placeholder="Start time"
                    v-model="form.startTime"
                    :picker-options="{
                      start: '00:00',
                      step: '00:30',
                      end: '24:00'
                }">
                </el-time-select>
            </el-col>
            <el-col :span="12">
                <el-time-select
                    placeholder="End time"
                    v-model="form.endTime"
                    :picker-options="{
                      start: '00:00',
                      step: '00:30',
                      end: '24:00',
                      minTime: form.startTime
                }">
                </el-time-select>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <el-checkbox v-model="form.road">Road</el-checkbox>
            </el-col>
            <el-col :span="6">
                <el-checkbox v-model="form.macadam">Macadam</el-checkbox>
            </el-col>
            <el-col :span="6">
                <el-checkbox v-model="form.foot">Foot</el-checkbox>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <el-checkbox v-model="form.water">Water</el-checkbox>
            </el-col>
            <el-col :span="6">
                <el-checkbox v-model="form.food">Food</el-checkbox>
            </el-col>
            <el-col :span="6">
                <p>Beds</p>
                <el-input-number v-model="form.beds" size="small" :min="0" :max="50"></el-input-number>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="15">
                <el-button type="primary" v-on:click="step">Add Info</el-button>
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
                    startTime: '',
                    endTime: '',
                    road: 0,
                    macadam: 0,
                    foot: 0,
                    water: 0,
                    food: 0,
                    beds: 0
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