'use client';

import { useState } from "react";
import Link from "next/link";

export default function RelatorioDetalhes({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("visualizar");
  
  // Dados de exemplo para o relatório
  const relatorio = {
    id: params.id,
    candidato: {
      nome: "Ana Silva",
      cargo: "Desenvolvedora Full Stack",
      data: "25/04/2025",
      idade: "28",
      onde_nasceu: "São Paulo, SP",
      onde_cresceu: "Campinas, SP",
      com_quem_mora: "esposo e um cachorro"
    },
    valores: {
      destaque_tecnico: "Ana possui formação em Ciência da Computação pela USP, com especialização em desenvolvimento web. Trabalha com programação há 6 anos, tendo experiência com React, Node.js, Python e bancos de dados SQL e NoSQL. Participou de projetos de grande porte, incluindo o desenvolvimento de um sistema de gestão financeira utilizado por mais de 50 mil usuários. Demonstra conhecimento em arquitetura de software e práticas de desenvolvimento ágil.",
      ama_servir: "Durante a entrevista, Ana mencionou sua participação como mentora em programas de capacitação para iniciantes em programação. Dedica 4 horas semanais para ajudar pessoas em início de carreira, oferecendo orientação técnica e de carreira. Em seu último emprego, criou documentações detalhadas para facilitar a integração de novos membros à equipe. Também contribui com projetos open source, tendo mais de 30 pull requests aceitos em repositórios populares no GitHub.",
      ama_estudar: "Ana mantém uma rotina de estudos constante, dedicando pelo menos 1 hora por dia para aprender novas tecnologias. Concluiu 12 cursos online nos últimos dois anos, incluindo certificações em AWS e Google Cloud. Participa mensalmente de meetups e conferências de tecnologia. Mantém um blog técnico onde compartilha aprendizados e soluções para problemas de desenvolvimento. Recentemente iniciou estudos em inteligência artificial e machine learning para expandir seu conjunto de habilidades.",
      entrega_resultados: "Em seu último projeto, Ana liderou a migração de um sistema legado para uma arquitetura moderna, reduzindo o tempo de carregamento em 70% e aumentando a taxa de conversão em 15%. Implementou testes automatizados que diminuíram os bugs em produção em 40%. Otimizou consultas de banco de dados que resultaram em economia de 30% nos custos de infraestrutura. Cumpriu todos os prazos estabelecidos nos últimos 10 sprints, mesmo com demandas variáveis.",
      tem_sonhos_reais: "Ana expressou o desejo de se tornar uma arquiteta de software nos próximos 5 anos. Planeja aprofundar seus conhecimentos em sistemas distribuídos e escalabilidade. Tem interesse em eventualmente liderar uma equipe de desenvolvimento, aplicando práticas que aprendeu ao longo de sua carreira. Busca trabalhar em projetos que tenham impacto social positivo. Seus objetivos são específicos e alinhados com sua trajetória profissional até o momento.",
      tem_empatia: "Durante dinâmicas em grupo, Ana demonstrou capacidade de ouvir atentamente os colegas antes de expressar suas opiniões. Quando recebeu feedback sobre pontos de melhoria em seu código, mostrou-se aberta e fez perguntas para entender melhor as sugestões. Relatou situações em que mudou de abordagem após ouvir perspectivas diferentes da equipe. Mencionou que aprende tanto com erros quanto com acertos e valoriza a diversidade de pensamento nas equipes que participa.",
      sensatez_posicionamentos: "Ana apresentou argumentos baseados em dados ao discutir escolhas tecnológicas. Quando questionada sobre situações de conflito, descreveu como buscou entender os diferentes pontos de vista antes de propor soluções. Demonstrou capacidade de avaliar prós e contras de diferentes abordagens técnicas, considerando fatores como manutenibilidade, escalabilidade e prazos. Em discussões técnicas, manteve postura equilibrada mesmo quando suas ideias foram contestadas."
    },
    parecer_headhunter: "Durante a entrevista, Ana demonstrou comunicação clara e objetiva, articulando bem suas experiências e conhecimentos técnicos. Manteve contato visual apropriado e postura corporal que transmitiu confiança sem arrogância. Respondeu a perguntas técnicas com precisão e admitiu quando não sabia algo, propondo formas de buscar a resposta. Sua energia foi constante durante toda a entrevista, mostrando entusiasmo genuíno pela oportunidade. Fez perguntas relevantes sobre a cultura da empresa e os desafios técnicos do cargo. Demonstrou alinhamento com os valores da empresa, especialmente no que se refere à colaboração e aprendizado contínuo."
  };

  // Função para gerar o relatório completo em formato de texto
  const gerarRelatorioTexto = () => {
    let texto = `# RELATÓRIO DE PERFIL DE CANDIDATO\n\n`;
    texto += `## Dados Pessoais\n${relatorio.candidato.nome}\n${relatorio.candidato.cargo}\n${relatorio.candidato.data}\n\n`;
    
    texto += `## Destaque Técnico\n${relatorio.valores.destaque_tecnico}\n\n`;
    texto += `## Ama Servir\n${relatorio.valores.ama_servir}\n\n`;
    texto += `## Ama Estudar\n${relatorio.valores.ama_estudar}\n\n`;
    texto += `## Entrega Resultados\n${relatorio.valores.entrega_resultados}\n\n`;
    texto += `## Tem Sonhos Reais\n${relatorio.valores.tem_sonhos_reais}\n\n`;
    texto += `## Tem Empatia / Tem Mentalidade de Aprendiz\n${relatorio.valores.tem_empatia}\n\n`;
    texto += `## Sensatez nos Posicionamentos\n${relatorio.valores.sensatez_posicionamentos}\n\n`;
    
    // Adicionar informações pessoais ao parecer
    let infoPessoal = "";
    if (relatorio.candidato.idade) {
      infoPessoal += `${relatorio.candidato.nome.split(' ')[0]} tem ${relatorio.candidato.idade} anos`;
    }
    
    if (relatorio.candidato.onde_nasceu) {
      if (infoPessoal) {
        infoPessoal += `, nasceu em ${relatorio.candidato.onde_nasceu}`;
      } else {
        infoPessoal += `${relatorio.candidato.nome.split(' ')[0]} nasceu em ${relatorio.candidato.onde_nasceu}`;
      }
    }
    
    if (relatorio.candidato.onde_cresceu) {
      if (infoPessoal) {
        infoPessoal += ` e cresceu em ${relatorio.candidato.onde_cresceu}`;
      } else {
        infoPessoal += `${relatorio.candidato.nome.split(' ')[0]} cresceu em ${relatorio.candidato.onde_cresceu}`;
      }
    }
    
    if (relatorio.candidato.com_quem_mora) {
      if (infoPessoal) {
        infoPessoal += `. Atualmente mora com ${relatorio.candidato.com_quem_mora}. `;
      } else {
        infoPessoal += `${relatorio.candidato.nome.split(' ')[0]} mora com ${relatorio.candidato.com_quem_mora}. `;
      }
    } else if (infoPessoal) {
      infoPessoal += ". ";
    }
    
    texto += `## Parecer da Head Hunter\n${infoPessoal}${relatorio.parecer_headhunter}`;
    
    return texto;
  };

  const tabs = [
    { id: "visualizar", label: "Visualizar Relatório" },
    { id: "exportar", label: "Exportar" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Relatório de {relatorio.candidato.nome}</h1>
        <Link 
          href="/relatorios"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Voltar para Relatórios
        </Link>
      </div>

      {/* Navegação por abas */}
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Conteúdo das abas */}
      <div className="bg-white rounded-lg shadow-md p-6">
        {activeTab === "visualizar" && (
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="prose max-w-none">
                <h1>RELATÓRIO DE PERFIL DE CANDIDATO</h1>
                
                <h2>Dados Pessoais</h2>
                <p>
                  {relatorio.candidato.nome}<br />
                  {relatorio.candidato.cargo}<br />
                  {relatorio.candidato.data}
                </p>
                
                <h2>Destaque Técnico</h2>
                <p>{relatorio.valores.destaque_tecnico}</p>
                
                <h2>Ama Servir</h2>
                <p>{relatorio.valores.ama_servir}</p>
                
                <h2>Ama Estudar</h2>
                <p>{relatorio.valores.ama_estudar}</p>
                
                <h2>Entrega Resultados</h2>
                <p>{relatorio.valores.entrega_resultados}</p>
                
                <h2>Tem Sonhos Reais</h2>
                <p>{relatorio.valores.tem_sonhos_reais}</p>
                
                <h2>Tem Empatia / Tem Mentalidade de Aprendiz</h2>
                <p>{relatorio.valores.tem_empatia}</p>
                
                <h2>Sensatez nos Posicionamentos</h2>
                <p>{relatorio.valores.sensatez_posicionamentos}</p>
                
                <h2>Parecer da Head Hunter</h2>
                <p>
                  {relatorio.candidato.nome.split(' ')[0]} tem {relatorio.candidato.idade} anos, 
                  nasceu em {relatorio.candidato.onde_nasceu} e cresceu em {relatorio.candidato.onde_cresceu}. 
                  Atualmente mora com {relatorio.candidato.com_quem_mora}. {relatorio.parecer_headhunter}
                </p>
              </div>
            </div>
            
            <div className="flex justify-end space-x-4">
              <Link 
                href={`/relatorios/${relatorio.id}/editar`}
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition-colors"
              >
                Editar Relatório
              </Link>
              <button
                onClick={() => setActiveTab("exportar")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
              >
                Exportar Relatório
              </button>
            </div>
          </div>
        )}

        {activeTab === "exportar" && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Exportar Relatório</h2>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-800 mb-2">Formato de Texto</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Copie o relatório em formato de texto para usar em outros documentos.
                </p>
                <textarea
                  readOnly
                  rows={10}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
                  value={gerarRelatorioTexto()}
                ></textarea>
                <div className="mt-4">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
                    onClick={() => {
                      navigator.clipboard.writeText(gerarRelatorioTexto());
                      alert("Relatório copiado para a área de transferência!");
                    }}
                  >
                    Copiar para Área de Transferência
                  </button>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-800 mb-2">Download como Arquivo</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Baixe o relatório como um arquivo de texto.
                </p>
                <button
                  className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition-colors"
                  onClick={() => {
                    const element = document.createElement("a");
                    const file = new Blob([gerarRelatorioTexto()], {type: 'text/plain'});
                    element.href = URL.createObjectURL(file);
                    element.download = `Relatorio_${relatorio.candidato.nome.replace(' ', '_')}.txt`;
                    document.body.appendChild(element);
                    element.click();
                    document.body.removeChild(element);
                  }}
                >
                  Baixar como TXT
                </button>
              </div>
            </div>
            
            <div className="flex justify-between mt-6">
              <button
                onClick={() => setActiveTab("visualizar")}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition-colors"
              >
                Voltar para Visualização
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
