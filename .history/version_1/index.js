const process = require('child_process');

class Process
{
	constructor ()
	{
		return this.process = process, this;
	}

	executer ( work, mode )
	{
		return new Promise(

			( resolve, reject ) => {

				(
					{
						buffer ()
						{
							try
							{
								resolve( `${work()}` );
							}
							catch ( error )
							{
								reject( `${error.stderr}` );
							}
						},

						callback ()
						{
							work(

								( error, stdout, stderr ) => {

									error ? reject( stderr ) : resolve( stdout );

								}

							);
						},

						spawn ()
						{
							work.stdout.on('data', (data) => {

								resolve( `${data}` );

							});

							work.stderr.on('data', (data) => {

								reject( `${data}` );

							});
						},

						spree ( error = work.status !== 0 )
						{
							error ? reject( `${work.stderr}` ) : resolve( `${work.stdout}` );
						},

						fork ()
						{
							work.on('close', (code) => {

								if ( code )
								{
									reject( new Error(`${code}`) );
								}

							});

							work.on('message', (data) => {

								resolve( data );

							});
						}

					}
				)

				[ mode ] ( /* Run */ )

			}

		);
	}

	// Process Bridge
	fork ( path, args, options )
	{
		return this.executer(

			process.fork( path, args, options ),

			'fork'

		);
	}

	//
	spawn ( command, args, sync, options )
	{
		if ( sync )
		{
			return this.executer(

				process.spawnSync( command, args, options ),

				'spree'

			);

		}

		return this.executer(

			process.spawn( command, args, options ),

			'spawn'

		);

	}

	exec ( command, sync, options )
	{
		if ( sync )
		{
			return this.executer(

				() => {

					return process.execSync( command, options );

				},

				'buffer'

			);

		}

		return this.executer(

			( callback ) => {

				return process.exec( command, options, callback );

			},

			'callback'

		);

	}

	file ( file, args, sync, options )
	{
		if ( sync )
		{
			return this.executer(

				() => {

					return process.execFileSync( file, args, options );

				},

				'buffer'

			);

		}

		return this.executer(

			( callback ) => {

				return process.execFile( file, args, options, callback );

			},

			'callback'

		);

	}
}

module.exports = new Process();
