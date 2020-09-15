import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import logo from 'Components/Atoms/Icons/App/net_launch_logo_claro.svg'

import defaultImage from 'Components/Atoms/Icons/default-image.svg'
import lupa from 'Components/Atoms/Icons/Nav/Search.svg'

import imagePopcorn from 'Components/Atoms/Icons/Messages/net_contenido_alquilado_sin_contenido.svg'
import imagePopcornInicio from 'Components/Atoms/Icons/Messages/net_vcard_renta_exito.svg'

import backSpaceIcon from 'Components/Atoms/Icons/Keyboard/back-space.svg'
import capitalLettersActive from 'Components/Atoms/Icons/Keyboard/capital_letters_active.svg'
import capitalLettersInactive from 'Components/Atoms/Icons/Keyboard/capital_letters_inactive.svg'

import imageHome from 'Components/Atoms/Icons/Nav/home.svg'
import imageTv from 'Components/Atoms/Icons/Nav/tv.svg'
import imageMovies from 'Components/Atoms/Icons/Nav/movies.svg'
import imageSeries from 'Components/Atoms/Icons/Nav/series.svg'
import imageKids from 'Components/Atoms/Icons/Nav/kids.svg'
import imageMyContents from 'Components/Atoms/Icons/Nav/mycontents.svg'
import imageProfile from 'Components/Atoms/Icons/Nav/profile.svg'
import imageMylist from 'Components/Atoms/Icons/Nav/MInhaLista.svg'
import imageSearch from 'Components/Atoms/Icons/Nav/Search.svg'
import imagePlanos from 'Components/Atoms/Icons/Nav/Planos.svg'
import imageSalir from 'Components/Atoms/Icons/Nav/salir.svg'

import candado from 'Components/2020/newEpg/images/net_epg_candado_2.svg'
import talentDefault from 'Components/2020/Cards/images/placeholder-actor.svg'

const resources = {
  pt: {
    translation: {
      asset: {
        imagePopcorn,
        imagePopcornInicio,
        logo,
        candado,
        menu: {
          imageHome,
          imageTv,
          imageMovies,
          imageSeries,
          imageKids,
          imageMyContents,
          imageProfile,
          imageMylist,
          imageSearch,
          imagePlanos,
          imageSalir,
        },
        Keyboard: {
          backSpaceIcon,
          capitalLettersActive,
          capitalLettersInactive,
        },
        input: {
          lupa,
        },
        cards: {
          default: defaultImage,
          talentDefault,
        },
        net_vcard_renta_sin_tarjeta:
          'http://clarovideocdn8.clarovideo.net/pregeneracion/cms/apa/996264de20e74fb01393510961964bd0/net_vcard_renta_sin_tarjeta.png?1586827518',
        net_vcard_renta_exito:
          'http://clarovideocdn2.clarovideo.net/pregeneracion/cms/apa/996264de20e74fb01393510961964bd0/net_vcard_renta_exito.png?1586827518',
        net_contenido_alquilado_contenido_removido:
          'http://clarovideocdn3.clarovideo.net/pregeneracion/cms/apa/996264de20e74fb01393510961964bd0/net_contenido_alquilado_contenido_removido.png?1586827518',
        net_vcard_renta_exito:
          'http://clarovideocdn2.clarovideo.net/pregeneracion/cms/apa/996264de20e74fb01393510961964bd0/net_vcard_renta_exito.png?1586827518',
        net_vcard_trailer:
          'http://clarovideocdn8.clarovideo.net/pregeneracion/cms/apa/996264de20e74fb01393510961964bd0/net_vcard_trailer.png?1586827518',
        net_icon_nx_claro_video:
          'http://clarovideocdn4.clarovideo.net/pregeneracion/cms/apa/996264de20e74fb01393510961964bd0/net_icon_nx_claro_video.png?1591034844',
        net_icon_nx_fox:
          'http://clarovideocdn6.clarovideo.net/pregeneracion/cms/apa/996264de20e74fb01393510961964bd0/net_icon_nx_fox.png?1586888777',
        net_icon_nx_globosat:
          'http://clarovideocdn1.clarovideo.net/pregeneracion/cms/apa/996264de20e74fb01393510961964bd0/net_icon_nx_globosat.png?1591034890',
        net_icon_nx_hbo:
          'http://clarovideocdn6.clarovideo.net/pregeneracion/cms/apa/996264de20e74fb01393510961964bd0/net_icon_nx_hbo.png?1591276566',
        net_icon_nx_looke:
          'http://clarovideocdn8.clarovideo.net/pregeneracion/cms/apa/996264de20e74fb01393510961964bd0/net_icon_nx_looke.png?1591034924',
        net_icon_nx_paramount_mais:
          'http://clarovideocdn7.clarovideo.net/pregeneracion/cms/apa/996264de20e74fb01393510961964bd0/net_icon_nx_paramount_mais.png?1591276492',
        net_icon_nx_philos:
          'http://clarovideocdn9.clarovideo.net/pregeneracion/cms/apa/996264de20e74fb01393510961964bd0/net_icon_nx_philos.png?1591035051',
        net_icon_nx_telecine:
          'http://clarovideocdn1.clarovideo.net/pregeneracion/cms/apa/996264de20e74fb01393510961964bd0/net_icon_nx_telecine.png?1586888816',
      },
      login: {
        header: 'Login',
        login_btn_lbl: 'entrar',
        register_show_pwd_button_value: 'mostrar',
        register_hide_pwd_button_value: 'esconder',
        net_login_pass: 'senha',
        ingresar_password: 'senha',
        net_login_user: 'usuário ou e-mail',
        email: 'email',
      },
      search: {
        net_busqueda_filmes: 'filmes',
        net_busqueda_series: 'séries',
        net_busqueda_all: 'todos',
        net_busqueda_tv: 'programas',
        net_busqueda_artista: 'artista',
      },
      aoVivo: {
        tv_channels_title: 'Canais',
        net_cambiar_idioma: 'Mudar o idioma',
        net_guia_completa: 'Guia completo',
        net_mini_guia: 'Miniguia',
        net_menu: 'Menu',
      },
      ficha: {
        talent: 'elenco',
        SeeOther: 'conteúdos similares',
      },
      profile: {
        social_profile_seen_title: 'últimos assistidos',
        own_social_profile_empty_seen_msg: 'Você ainda não assistiu nenhum conteúdo!',
      },
      btn_confirm_payment_cancel: 'cancelar',
      btn_menu_retry: 'tentar novamente',
      btn_modal_cancel: 'cancelar',
      btn_modal_ver_detalles: 'Ver detalhes',
      btn_trailer: 'trailer',
      confirmacion_salir_exit: 'Tem certeza de que deseja sair de Claro?',
      empty: 'limpar',
      ingresar_password: 'Senha...',
      invalid_mail_or_password_msg: 'Usuário ou senha inválidos',
      invalid_username_length: 'O nome deve ter ao menos 1 caracteter',
      loading: 'Ingresando',
      login_btn_lbl: '',
      net_activar: 'Ativar',
      net_agregado_minha_lista: 'adicionado à minha lista',
      net_agregar_favoritos: 'Adicionar aos meus favoritos',
      net_agregar_minha_lista: 'minha lista',
      net_alugados_contenido_no_disponible: 'Este conteúdo foi removido do catálogo.',
      net_alugados_expirados: 'aluguéis expirados',
      net_alugados_menu_vertical: 'alugados',
      net_alugados_sin_contenido: 'Você não possui nenhum aluguel vigente.',
      net_alugados_sin_contenido_caducado: 'Você não possui nenhum aluguel expirado.',
      net_alugados_sin_contenidos: 'Parece que você ainda não possui nenhum conteúdo alugado.',
      net_alugados_sin_contenidos_woow: 'woow!',
      net_alugados_vigentes: 'aluguéis vigentes',
      net_alugar_por: 'alugar por',
      net_assinar: 'assinar',
      net_assinar_boton_vcard: 'assinar por',
      net_assinar_exito1: 'tudo certo!',
      net_assinar_exito2: 'A assinatura foi feita com sucesso.',
      net_assinatura_confirmacion: 'Confira os dados antes de confirmar',
      net_assinatura_confirmacion1: 'Deseja confirmar a assinatura?',
      net_assinatura_confirmacion_assinatura: 'Assinatura',
      net_assinatura_confirmacion_precio: 'Preço',
      net_assinatura_confirmacion_tarjeta: 'Cartão',
      net_audios_subtitulos: 'Áudio e legendas',
      net_back_cerrar: 'fechar',
      net_back_registro_dispositivo: 'entendi',
      net_bloquear_canal: 'Bloquear canal',
      net_boton_planos: 'ver planos',
      net_busca_menu_vertical: 'busca',
      net_busqueda_vacio: 'busque e descubra',
      net_busqueda_vacio2: 'Encontre o que você quer assistir',
      net_cambiar_idioma: 'Mudar o idioma',
      net_cambiar_pin: 'Trocar PIN',
      net_canal_bloqueado: 'Este canal não faz parte de seu plano de assinatura',
      net_canales_bloqueados: 'Aqui aparecerão os seus canais bloqueados',
      net_cancelado_grabacion_no_se_vera_en_perfil:
        'Se cancelou a gravação, não verá mais este programa em seu perfil',
      net_carrusel_extras_e_trailers: 'extras e trailer',
      net_carrusel_titulo_profile: 'recién vistos',
      net_cerrar_canales: 'Fechar canais',
      net_cerrar_opciones_programa: 'Fechar opções do programa',
      net_cerrar_sin_medio_de_pago: 'entendi',
      net_compra_exitosa: 'Sua compra foi bem sucedida.',
      net_compra_no_exitosa: 'Não foi possível efetuar o pagamento. Por favor tente novamente.',
      net_confirm_compra: 'A compra será feita no valor de',
      net_confirm_compra2: 'cobrado no seu cartão, terminado em',
      net_confirm_payment: 'confirmar',
      net_confirm_renta: 'O aluguel será feito por',
      net_confirm_renta2: 'horas por R$',
      net_confirm_renta3: 'e será debitado no seu cartão de crédito com final',
      net_confirmar_mail_activacion_pin1: 'Foi enviado um e-mail para',
      net_confirmar_mail_activacion_pin2: 'para confirmar a ativação do PIN de controle parental',
      net_crear_pin: 'Crie o seu PIN de controle parental',
      net_data_update:
        'Identificamos que você já é um cliente. Agora, precisamos atualizar seus dados. Acesse o aplicativo pelo seu celular para atualização!',
      net_data_update_title: 'que legal!',
      net_desactivar: 'Desativar',
      net_desactivar_pin: 'Desativar PIN',
      net_desbloquear_canal: 'Desbloquear canal',
      net_deseja_assinar: 'Deseja assinar',
      net_deseja_assinar_o_plano: 'Deseja assinar o plano',
      net_deseja_assinar_signo_pregunta: '?',
      net_elenco: 'elenco',
      net_elenco_filmes: 'filmes',
      net_elenco_series: 'séries',
      net_error_agregar_minha_lista1: 'Erro ao adicionar na lista',
      net_error_agregar_minha_lista2: 'Tentar novamente',
      net_error_carga_alquilados: 'Aconteceu um erro ao carregar o conteúdo',
      net_error_carga_alquilados_oops: 'Oops!',
      net_error_conexion_internet: 'Você está sem conexão com a internet',
      net_error_firma_tarjeta:
        'Assinatura não concluida. Acesse o aplicativo pelo seu celular para realizar a assinatura ou entrar em contato através da opção Menu > Ajuda, para suporte online.',
      net_error_registro_dispositivo:
        'Ocorreu um erro ao tentar registrar o dispositivo. Por favor, tente novamente.',
      net_generos: 'gêneros',
      net_grabando: 'Gravando! Estre programa será adicionado ao seu perfil',
      net_grabar: 'Gravar',
      net_grabar_programa: 'Gravar programa',
      net_guia_completa: 'Guia completo',
      net_ingresa_pin: 'Insira o seu PIN de controle parental atual',
      net_ingresa_pin_control_parental: 'Insira o seu PIN de controle parental para ver o canal',
      net_ingresar_pin: 'Insira um PIN de 4 dígitos',
      net_inicio_carrusel_ao_vivo: 'ao vivo - termina às',
      net_launch_bienvenido: 'Bem-vindo(a)!',
      net_launch_boton_conectar: 'entrar',
      net_launch_mensaje:
        'Reunimos o maior acervo de conteúdo, programas de TV, filmes e séries. Tudo o que você gosta em um só lugar',
      net_login_user: 'usuário ou e-mail',
      net_login_recuperar: 'esqueceau a senha?',
      net_login_recuperar: 'esqueceu a senha',
      net_login_user: 'usuário ou e-mail',
      net_login_user: 'Usuário ou email',
      net_login_usuario_pass_obligatorio: 'Campos de usuário ou email e senha são obrigatórios',
      net_menu: 'Menu',
      net_minha_conta_menu_vertical: 'minha conta',
      net_minha_lista_conteudos_adicionados: 'conteúdos adicionados',
      net_minha_lista_empty: 'Parece que você ainda não possui nenhum conteúdo na sua lista',
      net_minha_lista_menu_vertical: 'minha lista',
      net_mini_guia: 'Miniguia',
      net_mis_favoritos: 'Meus favoritos',
      net_mis_grabaciones: 'Minhas gravações',
      net_ningun_resultado: 'ooops!',
      net_ningun_resultado2: 'Não encontramos nada sobre',
      net_ningun_resultado3: 'Tente uma nova busca com outro nome.',
      net_opciones_programa: 'Opções do programa',
      net_pin_canal_bloqueado: 'Este canal está bloqueado. É necessário ter um PIN para poder vê-lo',
      net_pin_control_parental_bloquear_canal:
        'Insira o seu PIN de controle parental para bloquear o canal',
      net_pin_control_parental_desbloquear_canal:
        'Insira o seu PIN de controle parental para desbloquear o canal',
      net_planos_already_bought_info: 'você já possui esta assinatura.',
      net_planos_already_bought_title: 'eeeba!',
      net_planos_day: '/dia',
      net_planos_description:
        'Aproveite os seus conteúdos favoritos assinando o pacote que mais combina com você',
      net_planos_menu_vertical: 'planos',
      net_planos_mes: '/mês',
      net_planos_meu_plano: 'meu plano',
      net_planos_minha_assinatura: 'minha assinatura',
      net_planos_outro_contenido: 'outros conteúdos',
      net_planos_precio: 'R$',
      net_player_audio: 'Áudio',
      net_player_subtitulos: 'Legendas',
      net_pop_up_bloqueo_de_canales:
        'Bloqueio de canais  Permite que você bloqueie canais que considere inapropriados para seus filhos na aba Evento do Guia de programação. Será necessário inserir o seu PIN sempre que quiser ter acesso a eles.',
      net_programa_agregado_favoritos:
        'Programa adicionado aos favoritos! Você poderá ver este programa no seu perfil',
      net_programa_eliminado_favoritos:
        'Programa excluído dos favoritos  Este programa não aparecerá mais no seu perfil',
      net_quitar_favoritos: 'Remover dos meus favoritos',
      net_quitar_recordatorio: 'Remover lembrete',
      net_recordar: 'Lembrar',
      net_recordar_pin: 'Lembrar PIN',
      net_recordar_pin_mail1: 'Foi enviado um e-mail para',
      net_recordar_pin_mail2: 'para lembrar você do seu PIN de controle parental',
      net_recordatorio_comienzo_programa:
        'Lembrete!  Avisaremos quando o programa estiver perto de começar',
      net_recordatorio_UFC_por_comenzar: 'Lembrete!  UFC no canal Claro sports está perto de começar',
      net_recuperar_contraseña1: 'Um email foi enviado para',
      net_recuperar_contraseña2: 'para redefinir sua senha',
      net_renta_exitosa: 'O aluguel foi feito com sucesso.',
      net_resultados_busqueda: 'resultados',
      net_salir_confirmar: 'Tem certeza de que deseja sair?',
      net_search_result_no_result2: 'Tente uma nova busca com outro nome.',
      net_seleccione_plan: 'Selecione um plano',
      net_seleccione_plan_texto:
        'Aproveite o melhor conteúdo adicionando alguns dos mais de 20 pacotes que tenemos para você',
      net_sin_medio_de_pago:
        'Você não possui cartão de crédito cadastrado. Para cadastrar, acesse no aplicativo do seu celular, a opção Menu – Minha Conta – Cartões de Crédito.',
      net_sin_plan_activo:
        'Parece que você ainda não possui nenhuma assinatura. Para assinar, acesse a opção Planos, no aplicativo do seu celular.',
      net_sin_plan_pantalla:
        'Parece que você ainda não possui nenhuma assinatura. Escolha o melhor plano para você assistir seus canais preferidos.',
      net_sin_plan_wooow: 'wooow!',
      net_teclado_espacio: 'espaço',
      net_ver_ahora: 'ver agora',
      net_ver_desde_inicio: 'Ver desde o começo',
      net_ver_mas_tarde: 'ver mais tarde',
      net_visualizar_recordatorios:
        'Lembretes  Aqui você terá uma visualização rápida dos seus programas agendados',
      npvr_confirm_play: 'assistir',
      own_social_profile_empty_seen_msg: 'Você ainda não assistiu nenhum conteúdo!',
      PLY_DEV_00004: 'Ocorreu um erro ao tentar registrar o dispositivo. Por favor, tente novamente.',
      PLY_DEV_00006:
        'Sua conta atingiu o limite máximo de dispositivos em uso. Para gerenciar seus dispositivos, acesse no aplicativo do seu celular, a opção Menu - Configurações - Gerenciar Dispositivos.',
      PLY_PLY_00007: 'Para visualizar ou baixar o conteúdo, você deve comprá-lo.',
      search_result_no_result: 'Não encontramos nada sobre',
      SeeOther: 'conteúdos similares',
      social_close_session: 'sair',
      social_profile_seen_title: 'Modificar en translations/language/brasil/social_profile_seen_title',
      player_continue_btn: 'Assistir de onde parou',
      player_begin_btn: 'Assistir desde o início',
      net_busqueda_tv: 'programas',
    },
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'pt',

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
