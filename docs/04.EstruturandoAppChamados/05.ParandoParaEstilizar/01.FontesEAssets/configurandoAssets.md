Selecionar e configurar fontes do Google Fonts em um projeto React Native envolve alguns passos importantes. Vou guiá-lo através do processo:

### Passo 1: Selecionar a Fonte no Google Fonts

1. **Visite o Google Fonts:**
   - Acesse [Google Fonts](https://fonts.google.com/).
   - Navegue pelas fontes disponíveis e escolha a que você deseja usar em seu projeto. Por exemplo, vamos escolher a fonte "Roboto".

2. **Baixar a Fonte:**
   - Clique na fonte escolhida.
   - Selecione os estilos de fonte que você deseja usar (por exemplo, Regular 400, Bold 700).
   - Clique em "Download family" no canto superior direito para baixar as fontes selecionadas.

### Passo 2: Adicionar Fontes ao Projeto React Native

3. **Adicionar Fontes ao Seu Projeto:**
   - Extraia o arquivo ZIP baixado e copie os arquivos de fonte (arquivos `.ttf`) para o seu projeto React Native.
   - É uma boa prática criar uma pasta específica para fontes, como `assets/fonts`.

### Passo 3: Configurar Fontes no React Native (React Native CLI)

Se você estiver usando React Native CLI (não Expo), siga estes passos:

4. **Editar o arquivo `react-native.config.js`:**
   - Na raiz do seu projeto, crie ou edite o arquivo `react-native.config.js`.
   - Adicione o caminho para a pasta de fontes:

     ```javascript
     module.exports = {
       assets: ['./assets/fonts/'],
     };
     ```

5. **Vincular os Recursos:**
   - Execute o comando `react-native link` para vincular as fontes ao seu projeto.

### Passo 4: Usar Fontes no Projeto (React Native CLI e Expo)

6. **Usar Fontes no Código:**
   - Agora você pode usar as fontes em seus componentes de estilo. Por exemplo:

     ```javascript
     const styles = StyleSheet.create({
       text: {
         fontFamily: 'Roboto-Regular', // Use o nome exato do arquivo da fonte
       },
     });
     ```

### Passo 5: Linkar Fontes

    ```bash
    npx react-native-asset
    ```
