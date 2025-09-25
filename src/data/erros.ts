// src/data/erros.ts
export const errosSitef: { [key: string]: { descricao: string; acao: string; permiteRetentativa: string } } = {
    'LR': {
        descricao: 'Transação referida.',
        acao: 'É possível que o cliente receba a cobrança, mas o lançamento é automaticamente corrigido em 7 a 10 dias úteis se a fatura não constar como PAGA na iugu.',
        permiteRetentativa: 'N/A'
    },
    '00': {
        descricao: 'Transação Nacional Autorizada com sucesso.',
        acao: 'N/A',
        permiteRetentativa: 'N/A'
    },
    '01': {
        descricao: 'Transação referida pelo emissor.',
        acao: 'Oriente o portador a contatar o emissor do cartão.',
        permiteRetentativa: 'Não'
    },
    '02': {
        descricao: 'Transação referida pelo emissor.',
        acao: 'Oriente o portador a contatar o emissor do cartão (Problemas com o cartão).',
        permiteRetentativa: 'Não'
    },
    '03': {
        descricao: 'Não foi encontrada a transação.',
        acao: 'N/A',
        permiteRetentativa: 'Não'
    },
    '04': {
        descricao: 'Cartão com restrição. Pode ser número de parcelas ou código de segurança inválido.',
        acao: 'Oriente o portador a contatar o emissor do cartão.',
        permiteRetentativa: 'Sim'
    },
    '05': {
        descricao: 'Transação não autorizada.',
        acao: 'Oriente o portador a contatar o emissor do cartão (não autorizada pelo emissor).',
        permiteRetentativa: 'Não'
    },
    '06': {
        descricao: 'Problemas ocorridos na transação eletrônica, instabilidade da adquirente.',
        acao: 'Tente novamente.',
        permiteRetentativa: 'Sim'
    },
    '07': {
        descricao: 'Cartão com restrição.',
        acao: 'Oriente o portador a contatar o emissor do cartão (Problemas com o cartão).',
        permiteRetentativa: 'Não'
    },
    '08': {
        descricao: 'Código de segurança inválido.',
        acao: 'O código de segurança foi informado errado no momento da compra.',
        permiteRetentativa: 'Não'
    },
    '10': {
        descricao: 'Não é permitido o envio do cartão.',
        acao: 'Adquirente está com os serviços instáveis, caso o erro continue ocorrendo entre em contato com nosso suporte técnico.',
        permiteRetentativa: 'Não'
    },
    '11': {
        descricao: 'Internacional Transação Autorizada com sucesso.',
        acao: 'N/A',
        permiteRetentativa: 'Não'
    },
    '12': {
        descricao: 'Transação inválida.',
        acao: 'Venda não autorizada pelo banco emissor do cartão. Cartão informado no momento da compra está incorreto.',
        permiteRetentativa: 'Não'
    },
    '13': {
        descricao: 'Valor inválido.',
        acao: 'Verifique valor mínimo de R$5,00 para parcelamento.',
        permiteRetentativa: 'Não'
    },
    '14': {
        descricao: 'Cartão inválido.',
        acao: 'N/A',
        permiteRetentativa: 'Não'
    },
    '15': {
        descricao: 'Emissor inválido.',
        acao: 'Emissor sem comunicação.',
        permiteRetentativa: 'Não'
    },
    '19': {
        descricao: 'Não foi possível processar a transação.',
        acao: 'Refaça a transação ou tente novamente mais tarde.',
        permiteRetentativa: 'Sim'
    },
    '21': {
        descricao: 'Cancelamento não efetuado.',
        acao: 'Não foi possível processar o cancelamento.',
        permiteRetentativa: 'Não'
    },
    '22': {
        descricao: 'Parcelamento inválido. Número de parcelas inválidas.',
        acao: 'Não foi possível processar a transação. Valor inválido. Refazer confirmando os dados.',
        permiteRetentativa: 'Não'
    },
    '24': {
        descricao: 'Quantidade de parcelas inválido.',
        acao: 'Não foi possível processar a transação. Quantidade de parcelas inválido.',
        permiteRetentativa: 'Não'
    },
    '30': {
        descricao: 'Não foi possível processar a transação.',
        acao: 'Solicite ao portador que reveja os dados e tente novamente. Se o erro persistir, entre em contato com a loja virtual.',
        permiteRetentativa: 'Não'
    },
    '39': {
        descricao: 'Transação não autorizada. Erro no banco emissor.',
        acao: 'Transação não autorizada. Entre em contato com seu banco emissor.',
        permiteRetentativa: 'Não'
    },
    '41': {
        descricao: 'Cartão com restrição.',
        acao: 'Oriente o portador a contatar o emissor do cartão (Problemas com o cartão).',
        permiteRetentativa: 'Não'
    },
    '43': {
        descricao: 'Cartão com restrição.',
        acao: 'Oriente o portador a contatar o emissor do cartão (Problemas com o cartão).',
        permiteRetentativa: 'Não'
    },
    '51': {
        descricao: 'Saldo insuficiente.',
        acao: 'Cliente deve entrar em contato com o banco.',
        permiteRetentativa: 'Sim'
    },
    '52': {
        descricao: 'Cartão com dígito de controle inválido.',
        acao: 'Não foi possível processar a transação. Cartão com dígito de controle inválido.',
        permiteRetentativa: 'Não'
    },
    '54': {
        descricao: 'Cartão vencido.',
        acao: 'Caso os dados informados estejam corretos, cliente deve entrar em contato com o banco para verificar se o cartão ainda é válido.',
        permiteRetentativa: 'Não'
    },
    '55': {
        descricao: 'Senha inválida.',
        acao: 'Senha informada está errada.',
        permiteRetentativa: 'Não'
    },
    '57': {
        descricao: 'Transação não permitida ou não autorizada.',
        acao: 'Venda não autorizada pelo emissor do cartão, pois o cartão utilizado não faz parte da rede Verified by Visa ou o sistema de prevenção do banco não autorizou a compra. O cliente deverá entrar em contato com o banco emissor.',
        permiteRetentativa: 'Não'
    },
    '58': {
        descricao: 'Transação não permitida.',
        acao: 'N/A',
        permiteRetentativa: 'Não'
    },
    '60': {
        descricao: 'Transação não autorizada.',
        acao: 'Oriente o portador a contatar o emissor do cartão.',
        permiteRetentativa: 'Não'
    },
    '61': {
        descricao: 'Banco emissor indisponível.',
        acao: 'Transação não autorizada. Tente novamente. Se o erro persistir, entre em contato com seu banco emissor.',
        permiteRetentativa: 'Sim'
    },
    '62': {
        descricao: 'Cartão com restrição.',
        acao: 'Oriente o portador a contatar o emissor do cartão. Cartão com algum bloqueio para transações online.',
        permiteRetentativa: 'Não'
    },
    '63': {
        descricao: 'Cartão com restrição.',
        acao: 'Oriente o portador a contatar o emissor do cartão. Possível erro de segurança ao tentar processar.',
        permiteRetentativa: 'Não'
    },
    '65': {
        descricao: 'Cartão com restrição.',
        acao: 'Transação negada. Oriente o portador a contatar o emissor do cartão (Problemas com o cartão).',
        permiteRetentativa: 'Não'
    },
    '67': {
        descricao: 'Transação não autorizada.',
        acao: 'Cartão bloqueado para compras hoje. Bloqueio pode ter ocorrido por excesso de tentativas inválidas.',
        permiteRetentativa: 'Sim'
    },
    '70': {
        descricao: 'Transação não autorizada. Limite excedido/sem saldo.',
        acao: 'Transação não autorizada. Entre em contato com seu banco emissor.',
        permiteRetentativa: 'Sim'
    },
    '74': {
        descricao: 'Transação não autorizada.',
        acao: 'A senha está vencida.',
        permiteRetentativa: 'Não'
    },
    '75': {
        descricao: 'Cartão com restrição.',
        acao: 'Motivo provável: bloqueio de senha. Oriente o portador a contatar o emissor do cartão.',
        permiteRetentativa: 'Não'
    },
    '76': {
        descricao: 'Tente novamente.',
        acao: 'N/A',
        permiteRetentativa: 'Sim'
    },
    '77': {
        descricao: 'Cancelamento não efetuado.',
        acao: 'Não foi localizada a transação original.',
        permiteRetentativa: 'Não'
    },
    '78': {
        descricao: 'Cartão não foi desbloqueado pelo portador.',
        acao: 'Cartão bloqueado. Oriente o portador a desbloqueá-lo junto ao emissor do cartão.',
        permiteRetentativa: 'Não'
    },
    '80': {
        descricao: 'Transação não autorizada.',
        acao: 'Data da transação ou data do primeiro pagamento inválida. Refazer confirmando os dados.',
        permiteRetentativa: 'Não'
    },
    '81': {
        descricao: 'Transação negada.',
        acao: 'N/A',
        permiteRetentativa: 'Não'
    },
    '82': {
        descricao: 'Transação inválida.',
        acao: 'Provável Código de Segurança Incorreto ou Inválido.',
        permiteRetentativa: 'Não'
    },
    '85': {
        descricao: 'Transação não permitida. Falha da operação.',
        acao: 'Houve um erro no processamento. Solicite ao portador que digite novamente os dados do cartão.',
        permiteRetentativa: 'Não'
    },
    '88': {
        descricao: 'Erro na transação.',
        acao: 'Transação não autorizada. O portador deve tentar novamente e se o erro persistir, entrar em contato com o banco emissor.',
        permiteRetentativa: 'Sim'
    },
    '90': {
        descricao: 'Transação não permitida. Falha da operação.',
        acao: 'Houve um erro no processamento. Solicite ao portador que digite novamente os dados do cartão.',
        permiteRetentativa: 'Não'
    },
    '91': {
        descricao: 'Banco indisponível.',
        acao: 'Emissor sem comunicação. Oriente o cliente a aguardar alguns minutos e tente novamente.',
        permiteRetentativa: 'Sim'
    },
    '92': {
        descricao: 'Transação não autorizada. Tempo de comunicação excedido.',
        acao: 'N/A',
        permiteRetentativa: 'Não'
    },
    '94': {
        descricao: 'Transação desfeita pela bandeira.',
        acao: 'N/A',
        permiteRetentativa: 'Não'
    },
    '96': {
        descricao: 'Tente novamente.',
        acao: 'Provável venda abaixo de R$ 1,00. Falha no envio da autorização.',
        permiteRetentativa: 'Sim'
    },
    '99': {
        descricao: 'Sistema do banco temporariamente fora de operação.',
        acao: 'Tente novamente mais tarde.',
        permiteRetentativa: 'Não'
    },
    'AA': {
        descricao: 'Tempo Excedido.',
        acao: 'Tempo excedido na comunicação com o banco emissor. Oriente o portador a tentar novamente, se o erro persistir, será necessário que o portador contate seu banco emissor.',
        permiteRetentativa: 'Sim'
    },
    'AC': {
        descricao: 'Cartão de débito sendo usado com crédito.',
        acao: 'Portador deve usar um cartão de Crédito.',
        permiteRetentativa: 'Não'
    },
    'AE': {
        descricao: 'Tente Mais Tarde.',
        acao: 'Tempo excedido na comunicação com o banco emissor. Oriente o portador a tentar novamente.',
        permiteRetentativa: 'Sim'
    },
    'AF': {
        descricao: 'Transação não permitida. Falha da operação.',
        acao: 'Houve um erro no processamento. Solicite ao portador que digite novamente os dados do cartão.',
        permiteRetentativa: 'Não'
    },
    'AG': {
        descricao: 'Transação não permitida. Falha da operação.',
        acao: 'Houve um erro no processamento. Solicite ao portador que digite novamente os dados do cartão.',
        permiteRetentativa: 'Não'
    },
    'Al': {
        descricao: 'Transação não autorizada. Autenticação não foi realizada.',
        acao: 'O portador não concluiu a autenticação.',
        permiteRetentativa: 'Não'
    },
    'AV': {
        descricao: 'Transação não autorizada. Dados Inválidos.',
        acao: 'Falha na validação dos dados da transação. Oriente o portador a rever os dados e tentar novamente.',
        permiteRetentativa: 'Sim'
    },
    'BD': {
        descricao: 'Transação não permitida. Falha da operação.',
        acao: 'Houve um erro no processamento. Solicite ao portador que digite novamente os dados do cartão.',
        permiteRetentativa: 'Não'
    },
    'BL': {
        descricao: 'Transação não autorizada. Limite diário excedido.',
        acao: 'Solicite ao portador que entre em contato com seu banco emissor.',
        permiteRetentativa: 'Não'
    },
    'BM': {
        descricao: 'Transação não autorizada. Cartão Inválido.',
        acao: 'Pode ser bloqueio do cartão no banco emissor.',
        permiteRetentativa: 'Não'
    },
    'BN': {
        descricao: 'Transação não autorizada. Cartão ou conta bloqueado.',
        acao: 'Solicite ao portador que entre em contato com seu banco emissor.',
        permiteRetentativa: 'Não'
    },
    'BV': {
        descricao: 'Transação não autorizada. Cartão vencido.',
        acao: 'Transação não autorizada. Cartão vencido.',
        permiteRetentativa: 'Não'
    },
    'CF': {
        descricao: 'Transação não autorizada. Falha na validação dos dados.',
        acao: 'Solicite ao portador que entre em contato com o banco emissor.',
        permiteRetentativa: 'Não'
    },
    'EE': {
        descricao: 'Transação não permitida. Valor da parcela inferior ao mínimo permitido.',
        acao: 'Não é permitido parcelas inferiores a R$ 5,00. Necessário rever cálculo para parcelas.',
        permiteRetentativa: 'Não'
    },
    'FA': {
        descricao: 'Transação não autorizada AMEX.',
        acao: 'Transação não autorizada AMEX.',
        permiteRetentativa: 'Não'
    },
    'FC': {
        descricao: 'Transação não autorizada. Ligue Emissor.',
        acao: 'Oriente o portador a entrar em contato com o banco emissor.',
        permiteRetentativa: 'Não'
    },
    'GA': {
        descricao: 'Transação não autorizada.',
        acao: 'Referida pela Cielo. Oriente o portador a aguardar alguns instantes e tentar novamente.',
        permiteRetentativa: 'Sim'
    },
    'GD': {
        descricao: 'Transação não permitida.',
        acao: 'Transação não é possível ser processada no estabelecimento. Entre em contato com a administradora do cartão para obter mais detalhes.',
        permiteRetentativa: 'Não'
    },
    'KA': {
        descricao: 'Transação não permitida. Falha na validação dos dados.',
        acao: 'Houve uma falha na validação dos dados. Solicite ao portador que reveja os dados e tente novamente.',
        permiteRetentativa: 'Não'
    },
    'KE': {
        descricao: 'Transação não autorizada. Falha na validação dos dados.',
        acao: 'Transação não autorizada. Falha na validação dos dados.',
        permiteRetentativa: 'Não'
    },
    'N7': {
        descricao: 'Transação não autorizada. Código de segurança inválido.',
        acao: 'Oriente o portador a corrigir os dados e tentar novamente.',
        permiteRetentativa: 'Não'
    }
};