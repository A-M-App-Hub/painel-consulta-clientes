export interface Client {
  id: string;
  nome: string;
  cpf_cnpj: string;
  email: string;
  telefone: string;
  segmento: string;
  status: "Ativo" | "Inativo";
}

export const mockClients: Client[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    nome: "João Silva Santos",
    cpf_cnpj: "***.***.001-**",
    email: "joao.silva@empresa.com.br",
    telefone: "(11) 98765-4321",
    segmento: "Tecnologia",
    status: "Ativo"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    nome: "Maria Oliveira Costa",
    cpf_cnpj: "**.***.***/0001-**",
    email: "maria.oliveira@consultoria.com",
    telefone: "(21) 97654-3210",
    segmento: "Consultoria",
    status: "Ativo"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    nome: "Pedro Henrique Almeida",
    cpf_cnpj: "***.***.003-**",
    email: "pedro.almeida@tech.io",
    telefone: "(11) 96543-2109",
    segmento: "Tecnologia",
    status: "Inativo"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440004",
    nome: "Ana Carolina Ferreira",
    cpf_cnpj: "**.***.***/0002-**",
    email: "ana.ferreira@financeira.com.br",
    telefone: "(31) 95432-1098",
    segmento: "Financeiro",
    status: "Ativo"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440005",
    nome: "Carlos Eduardo Rodrigues",
    cpf_cnpj: "***.***.005-**",
    email: "carlos.rodrigues@varejo.com",
    telefone: "(41) 94321-0987",
    segmento: "Varejo",
    status: "Ativo"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440006",
    nome: "Juliana Martins Souza",
    cpf_cnpj: "**.***.***/0003-**",
    email: "juliana.martins@saude.org",
    telefone: "(51) 93210-9876",
    segmento: "Saúde",
    status: "Ativo"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440007",
    nome: "Roberto Carlos Lima",
    cpf_cnpj: "***.***.007-**",
    email: "roberto.lima@industria.com.br",
    telefone: "(61) 92109-8765",
    segmento: "Indústria",
    status: "Inativo"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440008",
    nome: "Fernanda Beatriz Gomes",
    cpf_cnpj: "**.***.***/0004-**",
    email: "fernanda.gomes@educacao.edu",
    telefone: "(71) 91098-7654",
    segmento: "Educação",
    status: "Ativo"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440009",
    nome: "Ricardo Alves Pereira",
    cpf_cnpj: "***.***.009-**",
    email: "ricardo.pereira@logistica.com",
    telefone: "(81) 90987-6543",
    segmento: "Logística",
    status: "Ativo"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440010",
    nome: "Patrícia Helena Dias",
    cpf_cnpj: "**.***.***/0005-**",
    email: "patricia.dias@agro.com.br",
    telefone: "(85) 89876-5432",
    segmento: "Agronegócio",
    status: "Ativo"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440011",
    nome: "Marcos Vinícius Araújo",
    cpf_cnpj: "***.***.011-**",
    email: "marcos.araujo@energia.com",
    telefone: "(91) 88765-4321",
    segmento: "Energia",
    status: "Inativo"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440012",
    nome: "Camila Rodrigues Barbosa",
    cpf_cnpj: "**.***.***/0006-**",
    email: "camila.barbosa@telecom.net",
    telefone: "(11) 87654-3210",
    segmento: "Telecomunicações",
    status: "Ativo"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440013",
    nome: "André Luiz Cardoso",
    cpf_cnpj: "***.***.013-**",
    email: "andre.cardoso@construcao.com.br",
    telefone: "(21) 86543-2109",
    segmento: "Construção",
    status: "Ativo"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440014",
    nome: "Beatriz Almeida Nascimento",
    cpf_cnpj: "**.***.***/0007-**",
    email: "beatriz.nascimento@turismo.com",
    telefone: "(31) 85432-1098",
    segmento: "Turismo",
    status: "Inativo"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440015",
    nome: "Gustavo Henrique Moreira",
    cpf_cnpj: "***.***.015-**",
    email: "gustavo.moreira@seguros.com.br",
    telefone: "(41) 84321-0987",
    segmento: "Seguros",
    status: "Ativo"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440016",
    nome: "Larissa Fernandes Castro",
    cpf_cnpj: "**.***.***/0008-**",
    email: "larissa.castro@midia.com",
    telefone: "(51) 83210-9876",
    segmento: "Mídia",
    status: "Ativo"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440017",
    nome: "Felipe Augusto Ribeiro",
    cpf_cnpj: "***.***.017-**",
    email: "felipe.ribeiro@automotivo.com.br",
    telefone: "(61) 82109-8765",
    segmento: "Automotivo",
    status: "Ativo"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440018",
    nome: "Renata Cristina Monteiro",
    cpf_cnpj: "**.***.***/0009-**",
    email: "renata.monteiro@farmaceutica.com",
    telefone: "(71) 81098-7654",
    segmento: "Farmacêutico",
    status: "Inativo"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440019",
    nome: "Thiago Rodrigo Santana",
    cpf_cnpj: "***.***.019-**",
    email: "thiago.santana@quimica.com.br",
    telefone: "(81) 80987-6543",
    segmento: "Química",
    status: "Ativo"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440020",
    nome: "Vanessa Aparecida Teixeira",
    cpf_cnpj: "**.***.***/0010-**",
    email: "vanessa.teixeira@alimentacao.com",
    telefone: "(85) 79876-5432",
    segmento: "Alimentação",
    status: "Ativo"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440021",
    nome: "Leonardo Henrique Borges",
    cpf_cnpj: "***.***.021-**",
    email: "leonardo.borges@metalurgica.com.br",
    telefone: "(91) 78765-4321",
    segmento: "Metalurgia",
    status: "Ativo"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440022",
    nome: "Priscila Mendes Carvalho",
    cpf_cnpj: "**.***.***/0011-**",
    email: "priscila.carvalho@textil.com",
    telefone: "(11) 77654-3210",
    segmento: "Têxtil",
    status: "Inativo"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440023",
    nome: "Daniel Augusto Freitas",
    cpf_cnpj: "***.***.023-**",
    email: "daniel.freitas@papel.com.br",
    telefone: "(21) 76543-2109",
    segmento: "Papel e Celulose",
    status: "Ativo"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440024",
    nome: "Aline Cristina Pinto",
    cpf_cnpj: "**.***.***/0012-**",
    email: "aline.pinto@cosmeticos.com",
    telefone: "(31) 75432-1098",
    segmento: "Cosméticos",
    status: "Ativo"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440025",
    nome: "Bruno César Melo",
    cpf_cnpj: "***.***.025-**",
    email: "bruno.melo@mineracao.com.br",
    telefone: "(41) 74321-0987",
    segmento: "Mineração",
    status: "Ativo"
  }
];
