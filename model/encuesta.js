class Encuesta {

    constructor(body) {
        // TODO: asignar los defaults para los que pueden venir nulls
        this.genero = body.genero;
        this.edad = body.edad;
        this.pais = body.pais;
        this.region = body.region;
        this.moneda_local = body.moneda_local;
        this.anios_exp_total = body.anios_exp_total;
        this.anios_exp_puesto = body.anios_exp_puesto;
        this.cant_a_cargo = body.cant_a_cargo;
        this.estudios = body.estudios;
        this.estado_estudios = body.estado_estudios;
        this.carrera = body.carrera;
        this.realizaste_cursos = body.realizaste_cursos;
        this.puesto = body.puesto;
        this.tecnologias_1 = body.tecnologias_1;
        this.tecnologias_2 = body.tecnologias_2;
        this.tecnologias_3 = body.tecnologias_3;
        this.tecnologias_4 = body.tecnologias_4;
        this.tecnologias_5 = body.tecnologias_5;
        this.funcional_o_automation = body.funcional_o_automation;
        this.haces_guardias = body.haces_guardias;
        this.remuneracion_guardia = body.remuneracion_guardia;
        this.tipo_remuneracion_guardia = body.tipo_remuneracion_guardia;
        this.tipo_contrato = body.tipo_contrato;
        this.salario_mensual = body.salario_mensual;
        this.bruto_o_neto = body.bruto_o_neto;
        this.conformidad_sueldo = body.conformidad_sueldo;
        this.conformidad_sueldo_anterior = body.conformidad_sueldo_anterior;
        this.recibis_bono = body.recibis_bono;
        this.bono_sujeto_a = body.bono_sujeto_a;
        this.ajustes_por_inflacion = body.ajustes_por_inflacion;
        this.porcentaje_ajuste_inflacion = body.porcentaje_ajuste_inflacion;
        this.cant_empleados = body.cant_empleados;
        this.cambiaste_empresa_ultimos_6_meses = body.cambiaste_empresa_ultimos_6_meses;
        this.motivo_cambio_empresa = body.motivo_cambio_empresa;
        this.beneficios = body.beneficios;
        this.created_at = new Date();
    }

}

module.exports = Encuesta;
