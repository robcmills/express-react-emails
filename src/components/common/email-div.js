const React = require('react')

const EmailTable = require('./email-table')

module.exports = ({ align, bgcolor, children, margin, padding, style }) => {
	const margins = margin ? margin.split(' ') : []
	const marginTop = margins[0]
	const marginRight = margins[1] || margins[0]
	const marginBottom = margins[2] || margins[0]
	const marginLeft = margins[3] || margins[1] || margins[0]

	const paddings = padding ? padding.split(' ') : []
	const paddingTop = paddings[0]
	const paddingRight = paddings[1] || paddings[0]
	const paddingBottom = paddings[2] || paddings[0]
	const paddingLeft = paddings[3] || paddings[1] || paddings[0]

	return (
		<EmailTable>
			<tr>
				{marginLeft && marginLeft !== '0' &&
					<td style={{ width: `${marginLeft}px` }}></td>
				}
				<td>
					<EmailTable>
						{marginTop && marginTop !== '0' &&
							<tr>
								<td style={{ height: `${marginTop}px` }}></td>
							</tr>
						}
						<tr>
							<td>

								<EmailTable bgcolor={bgcolor} style={style}>
									<tr>
										{paddingLeft && paddingLeft !== '0' &&
											<td style={{ width: `${paddingLeft}px` }}></td>
										}
										<td>
											<EmailTable>
												{paddingTop && paddingTop !== '0' &&
													<tr>
														<td style={{ height: `${paddingTop}px` }}></td>
													</tr>
												}
												<tr>
													<td align={align}>
														{children}
													</td>
												</tr>
												{paddingBottom && paddingBottom !== '0' &&
													<tr>
														<td style={{ height: `${paddingBottom}px` }}></td>
													</tr>
												}
											</EmailTable>
										</td>
										{paddingRight && paddingRight !== '0' &&
											<td style={{ width: `${paddingRight}px` }}></td>
										}
									</tr>
								</EmailTable>

							</td>
						</tr>
						{marginBottom && marginBottom !== '0' &&
							<tr>
								<td style={{ height: `${marginBottom}px` }}></td>
							</tr>
						}
					</EmailTable>
				</td>
				{marginRight && marginRight !== '0' &&
					<td style={{ width: `${marginRight}px` }}></td>
				}
			</tr>
		</EmailTable>
	)
}
