export default `
.swagger-ui .topbar,
.scheme-container,
.swagger-ui .info .title small.version-stamp {
	display: none
}

*,
.swagger-ui,
.swagger-ui .model-title,
.swagger-ui .parameter__name,
.swagger-ui table thead tr td,
.swagger-ui .response-col_status,
.swagger-ui .opblock-description-wrapper p,
.swagger-ui .info .title,
.swagger-ui .parameter__name,
.swagger-ui .renderedMarkdown p,
.swagger-ui table thead tr th {
	color: white
}

body,
.swagger-ui .opblock-body select {
	background-color: #121212
}

.swagger-ui .opblock .tab-header .tab-item.active h4 span, .swagger-ui .parameters-col_description input[type=text] {
	color: black
}
`;
